import {
  Heading,
  Flex,
  Button,
  Avatar,
  RevealFx,
  Text,
  SmartLink,
  SmartImage,
} from "../components/once-ui/components";

import { getPosts } from "@/app/utils";
import { about, baseURL, home, person } from "@/resources";
import { Highlight } from "@/components/ui/hero-highlight";

export function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
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

export default function Home() {
  const allProjects = getPosts(["src", "app", "work", "projects"]);
  const featuredSlugs = home.featuredProjectSlugs ?? [];
  const featuredProjects = featuredSlugs
    .map((slug) => allProjects.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `https://${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `https://${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex
        fillWidth
        direction="column"
        alignItems="center"
        paddingY="l"
        gap="m"
      >
        <Flex direction="column" fillWidth maxWidth="s" gap="m">
          <RevealFx translateY="4">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            <div className="text-muted-foreground font-mono text-xl leading-relaxed">
              <p>
                Hi, I&apos;m Toufic, a passionate{" "}
                <RevealFx delay={0.1}>
                  <Highlight className="text-black dark:text-white">
                    Full Stack Developer
                  </Highlight>
                </RevealFx>{" "}
                who loves turning complex challenges into seamless solutions.
              </p>
            </div>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Flex gap="m" wrap alignItems="center">
              <Button
                data-border="rounded"
                href="/work"
                variant="tertiary"
                suffixIcon="chevronRight"
                size="m"
              >
                View work
              </Button>
              <Button
                data-border="rounded"
                href="/about"
                variant="tertiary"
                suffixIcon="chevronRight"
                size="m"
              >
                <Flex gap="8" alignItems="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  About me
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
          {home.valueProposition && (
            <RevealFx translateY="8" delay={0.35}>
              <Flex direction="column" gap="8">
                <Text variant="heading-strong-s">What I do</Text>
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  wrap="balance"
                >
                  {home.valueProposition}
                </Text>
              </Flex>
            </RevealFx>
          )}
          {featuredProjects.length > 0 && (
            <RevealFx translateY="12" delay={0.45}>
              <Flex direction="column" fillWidth gap="m" marginTop="l">
                <Text variant="heading-strong-s">Featured projects</Text>
                <Flex
                  direction="column"
                  gap="l"
                  fillWidth
                  style={{ maxWidth: "100%" }}
                >
                  {featuredProjects.map((project) => (
                    <SmartLink
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      style={{
                        textDecoration: "none",
                        margin: 0,
                        display: "block",
                      }}
                    >
                      <Flex
                        direction="column"
                        gap="s"
                        paddingY="m"
                        paddingX="s"
                        style={{
                          border: "1px solid var(--neutral-alpha-medium)",
                          borderRadius: "var(--static-radius-m)",
                        }}
                      >
                        {project.metadata.images?.[0] && (
                          <SmartImage
                            src={project.metadata.images[0]}
                            alt={project.metadata.title}
                            aspectRatio="16 / 9"
                            radius="m"
                            style={{ maxHeight: 160 }}
                          />
                        )}
                        <Heading as="h3" variant="heading-strong-m">
                          {project.metadata.title}
                        </Heading>
                        <Text
                          variant="body-default-s"
                          onBackground="neutral-weak"
                          wrap="balance"
                        >
                          {project.metadata.summary}
                        </Text>
                        <Text variant="body-default-s" onBackground="accent-weak">
                          Read case study →
                        </Text>
                      </Flex>
                    </SmartLink>
                  ))}
                </Flex>
                <Button href="/work" variant="tertiary" size="s" suffixIcon="chevronRight">
                  View all projects
                </Button>
              </Flex>
            </RevealFx>
          )}
          {about.calendar.display && (
            <RevealFx translateY="12" delay={0.5}>
              <Flex
                direction="column"
                fillWidth
                maxWidth="s"
                gap="s"
                paddingY="l"
                marginTop="m"
                style={{
                  borderTop: "1px solid var(--neutral-alpha-medium)",
                }}
              >
                <Text variant="heading-strong-s">Let&apos;s work together</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Schedule a call or reach out by email.
                </Text>
                <Flex gap="s" wrap>
                  <Button
                    href={about.calendar.link}
                    variant="tertiary"
                    size="s"
                    prefixIcon="calendar"
                  >
                    Schedule a call
                  </Button>
                  <Button
                    href="mailto:contact@toufichajj.dev"
                    variant="tertiary"
                    size="s"
                    prefixIcon="email"
                  >
                    Email me
                  </Button>
                </Flex>
              </Flex>
            </RevealFx>
          )}
        </Flex>
      </Flex>
    </>
  );
}
