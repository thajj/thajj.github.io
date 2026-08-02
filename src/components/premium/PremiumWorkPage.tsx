import Link from "next/link";
import { PremiumImage } from "./PremiumImage";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { formatProjectDate } from "@/app/utils";
import { work } from "@/resources";

type Project = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
    tags?: string[];
    organization?: string;
  };
};

function shortTitle(title: string) {
  const cut = title.split(":")[0]?.trim();
  return cut && cut.length < title.length ? cut : title;
}

function ProjectDate({ project }: { project: Project }) {
  return (
    <p className="project-date">
      {formatProjectDate(
        project.metadata.publishedAt,
        project.metadata.organization
      )}
    </p>
  );
}

export function PremiumWorkPage({ projects }: { projects: Project[] }) {
  const bySlug = new Map(projects.map((p) => [p.slug, p]));
  const collections = work.collections ?? [];
  const groupedSlugs = new Set(collections.flatMap((c) => c.slugs));
  const leftover = projects.filter((p) => !groupedSlugs.has(p.slug));

  return (
    <main className="inner-page">
      <section className="page-hero page-hero-compact">
        <div className="wrap">
          <p className="eyebrow">{work.label}</p>
          <h1>{work.title}</h1>
          <p className="page-lede">{work.heroLede ?? work.description}</p>
        </div>
      </section>

      {collections.map((collection) => {
        const items = collection.slugs
          .map((slug) => bySlug.get(slug))
          .filter((p): p is Project => p != null);
        if (items.length === 0) return null;

        return (
          <section key={collection.id} id={collection.id} className="work-collection">
            <div className="wrap">
              <Reveal>
                <SectionHead
                  eyebrow={collection.eyebrow}
                  title={collection.title}
                  intro={collection.intro}
                />
              </Reveal>
              <div
                className={
                  items.length === 1
                    ? "projects-grid projects-grid-solo"
                    : items.length === 2
                      ? "projects-grid projects-grid-pair"
                      : "projects-grid"
                }
              >
                {items.map((project, i) => {
                  const image = project.metadata.images?.[0];
                  return (
                    <Reveal key={project.slug} delay={(i % 3) * 70}>
                      <Link
                        className="project-card"
                        href={`/work/${project.slug}`}
                      >
                        {image && (
                          <PremiumImage
                            src={image}
                            alt={project.metadata.title}
                            slug={project.slug}
                          />
                        )}
                        <div className="body">
                          <ProjectDate project={project} />
                          <h3>{shortTitle(project.metadata.title)}</h3>
                          <p>{project.metadata.summary}</p>
                          {project.metadata.tags &&
                            project.metadata.tags.length > 0 && (
                              <div className="locale">
                                {project.metadata.tags
                                  .slice(0, 3)
                                  .map((tag) => (
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
        );
      })}

      {leftover.length > 0 && (
        <section className="work-collection">
          <div className="wrap">
            <Reveal>
              <SectionHead
                eyebrow="More"
                title="Additional case studies."
                intro="Other shipped work kept here for completeness."
              />
            </Reveal>
            <div className="projects-grid">
              {leftover.map((project, i) => {
                const image = project.metadata.images?.[0];
                return (
                  <Reveal key={project.slug} delay={(i % 3) * 70}>
                    <Link
                      className="project-card"
                      href={`/work/${project.slug}`}
                    >
                      {image && (
                        <PremiumImage
                          src={image}
                          alt={project.metadata.title}
                          slug={project.slug}
                        />
                      )}
                      <div className="body">
                        <ProjectDate project={project} />
                        <h3>{shortTitle(project.metadata.title)}</h3>
                        <p>{project.metadata.summary}</p>
                        <span className="link">Read case study →</span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
