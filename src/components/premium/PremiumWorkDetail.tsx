import Link from "next/link";
import { PremiumImage } from "./PremiumImage";
import { PremiumMDX } from "@/components/premium/PremiumMDX";
import { formatDate } from "@/app/utils";

type ProjectPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
  };
  content: string;
};

export function PremiumWorkDetail({ post }: { post: ProjectPost }) {
  const heroImage = post.metadata.images?.[0];

  return (
    <main className="inner-page">
      <section className="page-hero page-hero-compact">
        <div className="wrap">
          <Link className="back-link" href="/work">
            ← All projects
          </Link>
          <p className="eyebrow">{formatDate(post.metadata.publishedAt)}</p>
          <h1>{post.metadata.title}</h1>
          <p className="page-lede">{post.metadata.summary}</p>
        </div>
      </section>

      {heroImage && (
        <section className="detail-media">
          <div className="wrap">
            <PremiumImage
              src={heroImage}
              alt={post.metadata.title}
              slug={post.slug}
              aspectRatio="16 / 9"
            />
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <article className="premium-prose">
            <PremiumMDX source={post.content} />
          </article>
        </div>
      </section>

      {post.metadata.images.length > 1 && (
        <section>
          <div className="wrap">
            <div className="detail-gallery">
              {post.metadata.images.slice(1).map((image, index) => (
                <PremiumImage
                  key={image}
                  src={image}
                  alt={`${post.metadata.title} screenshot ${index + 2}`}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
