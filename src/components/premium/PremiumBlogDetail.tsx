import Link from "next/link";
import { PremiumImage } from "./PremiumImage";
import { PremiumMDX } from "@/components/premium/PremiumMDX";
import { formatDate } from "@/app/utils";

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
  content: string;
};

export function PremiumBlogDetail({ post }: { post: BlogPost }) {
  return (
    <main className="inner-page">
      <section className="page-hero page-hero-compact">
        <div className="wrap">
          <Link className="back-link" href="/blog">
            ← All posts
          </Link>
          <p className="eyebrow">
            {formatDate(post.metadata.publishedAt, false, { style: "monthYear" })}
          </p>
          <h1>{post.metadata.title}</h1>
          <p className="page-lede">{post.metadata.summary}</p>
        </div>
      </section>

      {post.metadata.image && (
        <section className="detail-media">
          <div className="wrap">
            <PremiumImage src={post.metadata.image} alt={post.metadata.title} />
          </div>
        </section>
      )}

      <section>
        <div className="wrap detail-body">
          <article className="premium-prose">
            <PremiumMDX source={post.content} />
          </article>
        </div>
      </section>
    </main>
  );
}
