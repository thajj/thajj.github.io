import { getPosts } from "@/app/utils";
import { PremiumBlogPage } from "@/components/premium/PremiumBlogPage";
import { baseURL, blog, person } from "@/resources";

export function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [{ url: ogImage, alt: title }],
    },
  };
}

export default function Blog() {
  const sortedBlogs = getPosts(["src", "app", "(main)", "blog", "posts"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            author: { "@type": "Person", name: person.name },
          }),
        }}
      />
      <PremiumBlogPage posts={sortedBlogs} />
    </>
  );
}
