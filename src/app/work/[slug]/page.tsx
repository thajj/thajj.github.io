import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getPosts } from "../../utils";
import {
  Button,
  Flex,
  Heading,
  SmartImage,
  Text,
} from "@/components/once-ui/components";
import { baseURL, person } from "@/resources";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { ScrollReveal } from "@/components/ScrollReveal";

interface WorkParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "work", "projects"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: WorkParams) {
  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  const ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
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

export default function Project({ params }: WorkParams) {
  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <Flex
      as="section"
      fillWidth
      maxWidth="m"
      direction="column"
      alignItems="center"
      gap="l"
    >
      <AnalyticsTracker type="project" title={post.metadata.title} slug={post.slug} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <ScrollReveal delay={0}>
        <Flex fillWidth maxWidth="xs" gap="16" direction="column">
          <Button
            href="/work"
            variant="tertiary"
            size="s"
            prefixIcon="chevronLeft"
          >
            Projects
          </Button>
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
        </Flex>
      </ScrollReveal>
      {post.metadata.images.length > 0 && (
        <SmartImage
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={post.metadata.images[0]}
        />
      )}
      <ScrollReveal delay={0.2}>
        <Flex
          style={{ margin: "auto" }}
          as="article"
          maxWidth="xs"
          fillWidth
          direction="column"
        >
          <Flex gap="12" marginBottom="24" alignItems="center">
            <Text variant="body-default-s" onBackground="neutral-weak">
              {formatDate(post.metadata.publishedAt)}
            </Text>
          </Flex>
          <CustomMDX source={post.content} />
        </Flex>
      </ScrollReveal>
    </Flex>
  );
}
