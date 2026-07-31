import Link from "next/link";
import { PremiumImage } from "./PremiumImage";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { formatDate } from "@/app/utils";
import { work } from "@/resources";

type Project = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
    tags?: string[];
  };
};

function shortTitle(title: string) {
  const cut = title.split(":")[0]?.trim();
  return cut && cut.length < title.length ? cut : title;
}

export function PremiumWorkPage({ projects }: { projects: Project[] }) {
  return (
    <main className="inner-page">
      <section className="page-hero page-hero-compact">
        <div className="wrap">
          <p className="eyebrow">{work.label}</p>
          <h1>Selected work</h1>
          <p className="page-lede">
            Case studies across mobile, trading platforms, and digital products —
            each owned end to end.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Archive"
              title={`${projects.length} projects in production.`}
              intro="From quiz apps to institutional interfaces — designed for real users and real constraints."
            />
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, i) => {
              const image = project.metadata.images?.[0];
              return (
                <Reveal key={project.slug} delay={(i % 3) * 70}>
                  <Link className="project-card" href={`/work/${project.slug}`}>
                    {image && (
                      <PremiumImage
                        src={image}
                        alt={project.metadata.title}
                        slug={project.slug}
                      />
                    )}
                    <div className="body">
                      <p className="project-date">
                        {formatDate(project.metadata.publishedAt)}
                      </p>
                      <h3>{shortTitle(project.metadata.title)}</h3>
                      <p>{project.metadata.summary}</p>
                      {project.metadata.tags && project.metadata.tags.length > 0 && (
                        <div className="locale">
                          {project.metadata.tags.slice(0, 3).map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                      <span className="link">Read case study →</span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
