import { notFound } from "next/navigation";
import { getPosts } from "@/app/utils";
import { PremiumBlogDetail } from "@/components/premium/PremiumBlogDetail";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { baseURL, person } from "@/resources";

interface BlogParams {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getPosts(["src", "app", "(main)", "blog", "posts"]).map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogParams) {
  const post = getPosts(["src", "app", "(main)", "blog", "posts"]).find(
    (p) => p.slug === params.slug
  );
  if (!post) return {};

  const { title, publishedAt, summary, image } = post.metadata;
  const ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      url: `https://${baseURL}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
  };
}

export default function BlogPost({ params }: BlogParams) {
  const post = getPosts(["src", "app", "(main)", "blog", "posts"]).find(
    (p) => p.slug === params.slug
  );

  if (!post) notFound();

  return (
    <>
      <AnalyticsTracker type="blog" title={post.metadata.title} slug={post.slug} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            description: post.metadata.summary,
            url: `https://${baseURL}/blog/${post.slug}`,
            author: { "@type": "Person", name: person.name },
          }),
        }}
      />
      <PremiumBlogDetail post={post} />
    </>
  );
}
