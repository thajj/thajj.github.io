import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Team = {
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
};

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    team: Team[];
    tags?: string[];
    link?: string;
    organization?: string;
};

function getMDXFiles(dir: string) {
    if (!fs.existsSync(dir)) {
        throw new Error(`Directory not found: ${dir}`);
    }

    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(rawContent);

    const metadata: Metadata = {
        title: data.title || '',
        publishedAt: data.publishedAt,
        summary: data.summary || '',
        images: data.images || [],
        team: data.team || [],
        tags: data.tags || [],
        link: data.link || undefined,
        organization: data.organization || undefined,
    };

    return { metadata, content };
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getPosts(customPath = ['', '', '', '']) {
    const postsDir = path.join(process.cwd(), ...customPath);
    return getMDXData(postsDir);
}

/** Parse YYYY-MM-DD (or YYYY-MM) as a calendar date — no timezone shift. */
export function parseCalendarDate(date: string) {
    const [year, month, day] = date
        .split('T')[0]
        .split('-')
        .map((part) => Number(part));

    return {
        year,
        month: month || 1,
        day: day || 1,
        hasDay: Boolean(day),
    };
}

export function formatDate(
    date: string,
    includeRelative = false,
    options?: { style?: 'full' | 'monthYear' }
) {
    const { year, month, day, hasDay } = parseCalendarDate(date);
    const targetDate = new Date(year, month - 1, day);
    const style = options?.style ?? (hasDay ? 'full' : 'monthYear');

    const fullDate =
        style === 'monthYear' || !hasDay
            ? targetDate.toLocaleString('en-US', {
                  month: 'long',
                  year: 'numeric',
              })
            : targetDate.toLocaleString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
              });

    if (!includeRelative) {
        return fullDate;
    }

    const currentDate = new Date();
    const yearsAgo = currentDate.getFullYear() - year;
    const monthsAgo =
        currentDate.getFullYear() * 12 +
        currentDate.getMonth() -
        (year * 12 + (month - 1));

    let formattedDate = '';
    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else {
        const daysAgo = currentDate.getDate() - day;
        formattedDate = daysAgo > 0 ? `${daysAgo}d ago` : 'Today';
    }

    return `${fullDate} (${formattedDate})`;
}

/** Work/project date line: "August 2018 · InMédia / BiblioMondo" when org is set. */
export function formatProjectDate(
    date: string,
    organization?: string
) {
    const label = formatDate(date, false, { style: 'monthYear' });
    return organization ? `${label} · ${organization}` : label;
}