import { getPosts } from "@/app/utils";
import { Flex } from "@/components/once-ui/components";
import { Projects } from "@/app/work/components/Projects";
import { baseURL, person, work } from "@/resources";
import { Timeline } from "@/components/ui/timeline";

export function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Work() {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const projectsByYear = sortedProjects.reduce((acc, project) => {
    const year = new Date(project.metadata.publishedAt)
      .getFullYear()
      .toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, typeof allProjects>);

  const timelineData = Object.entries(projectsByYear)
    .map(([year, projects]) => ({
      title: year,
      content: <Projects projects={projects} range={[0, 1]} />,
    }))
    .reverse();

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/work`,
            image: `https://${baseURL}/og?title=${encodeURIComponent(work.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: sortedProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/work/${project.slug}`,
              image: `https://${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Timeline data={timelineData} />
    </Flex>
  );
}
