import { notFound } from "next/navigation";
import { getPosts } from "@/app/utils";
import { PremiumWorkDetail } from "@/components/premium/PremiumWorkDetail";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { baseURL, person } from "@/resources";

interface WorkParams {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getPosts(["src", "app", "(main)", "work", "projects"]).map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: WorkParams) {
  const post = getPosts(["src", "app", "(main)", "work", "projects"]).find(
    (p) => p.slug === params.slug
  );
  if (!post) return {};

  const { title, publishedAt, summary, images } = post.metadata;
  const ogImage = images?.[0] ?? `https://${baseURL}/og.png`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      url: `https://${baseURL}/work/${post.slug}`,
      images: [{ url: ogImage.startsWith("http") ? ogImage : `https://${baseURL}${ogImage}` }],
    },
  };
}

export default function Project({ params }: WorkParams) {
  const post = getPosts(["src", "app", "(main)", "work", "projects"]).find(
    (p) => p.slug === params.slug
  );

  if (!post) notFound();

  return (
    <>
      <AnalyticsTracker type="project" title={post.metadata.title} slug={post.slug} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: post.metadata.title,
            description: post.metadata.summary,
            url: `https://${baseURL}/work/${post.slug}`,
            author: { "@type": "Person", name: person.name },
          }),
        }}
      />
      <PremiumWorkDetail post={post} />
    </>
  );
}
