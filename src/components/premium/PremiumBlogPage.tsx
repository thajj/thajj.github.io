import { PremiumImage } from "./PremiumImage";
import { formatDate } from "@/app/utils";
import { blog } from "@/resources";

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
};

export function PremiumBlogPage({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="inner-page">
      <section className="page-hero page-hero-compact">
        <div className="wrap">
          <p className="eyebrow">{blog.label}</p>
          <h1>{blog.title}</h1>
          <p className="page-lede">{blog.description}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="projects-grid">
            {posts.map((post) => (
              <a className="project-card" href={`/blog/${post.slug}`} key={post.slug}>
                {post.metadata.image && (
                  <PremiumImage
                    src={post.metadata.image}
                    alt={post.metadata.title}
                  />
                )}
                <div className="body">
                  <p className="project-date">
                    {formatDate(post.metadata.publishedAt, false, {
                      style: "monthYear",
                    })}
                  </p>
                  <h3>{post.metadata.title}</h3>
                  <p>{post.metadata.summary}</p>
                  <span className="link">Read post →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
