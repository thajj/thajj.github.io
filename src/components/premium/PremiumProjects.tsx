import Link from "next/link";
import { PremiumImage } from "./PremiumImage";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { getPosts } from "@/app/utils";
import { home, work } from "@/resources";

function shortTitle(title: string) {
  const cut = title.split(":")[0]?.trim();
  return cut && cut.length < title.length ? cut : title;
}

function useCaseLabel(slug: string) {
  const collection = work.collections?.find((c) => c.slugs.includes(slug));
  return collection?.eyebrow ?? null;
}

export function PremiumProjects() {
  const allProjects = getPosts(["src", "app", "(main)", "work", "projects"]);
  const featuredSlugs = home.featuredProjectSlugs ?? [];
  const featured = featuredSlugs
    .map((slug) => allProjects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p != null);

  if (featured.length === 0) return null;

  const [primary, ...rest] = featured;
  const copy = home.featuredWork ?? {
    eyebrow: "Selected work",
    title: "Proof under constraint.",
    intro:
      "Institutional platforms first — then product systems that show the same end-to-end ownership.",
  };

  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow={copy.eyebrow}
            title={copy.title}
            intro={copy.intro}
          />
        </Reveal>

        <div className="work-showcase">
          {primary && (
            <Reveal>
              <Link className="work-feature" href={`/work/${primary.slug}`}>
                {primary.metadata.images?.[0] && (
                  <PremiumImage
                    src={primary.metadata.images[0]}
                    alt={primary.metadata.title}
                    slug={primary.slug}
                    aspectRatio="16 / 10"
                    className="work-feature-media"
                  />
                )}
                <div className="work-feature-copy">
                  <p className="eyebrow">
                    {useCaseLabel(primary.slug) ?? "Featured"}
                  </p>
                  <h3>{shortTitle(primary.metadata.title)}</h3>
                  <p>{primary.metadata.summary}</p>
                  <span className="link">
                    {primary.metadata.link
                      ? "View case study →"
                      : "Read case study →"}
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="work-secondary">
              {rest.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80}>
                  <Link className="project-card" href={`/work/${project.slug}`}>
                    {project.metadata.images?.[0] && (
                      <PremiumImage
                        src={project.metadata.images[0]}
                        alt={project.metadata.title}
                        slug={project.slug}
                      />
                    )}
                    <div className="body">
                      {useCaseLabel(project.slug) && (
                        <p className="project-lane">
                          {useCaseLabel(project.slug)}
                        </p>
                      )}
                      <h3>{shortTitle(project.metadata.title)}</h3>
                      <p>{project.metadata.summary}</p>
                      <span className="link">Read case study →</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <Reveal>
          <div className="view-all">
            <Link className="btn btn-dark" href="/work">
              Browse by use case
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
