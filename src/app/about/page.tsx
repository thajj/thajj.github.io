import styles from "@/app/about/about.module.scss";
import { Flex } from "@/components/Flex";
import {
  Button,
  Heading,
  SmartImage,
  Text,
} from "@/components/once-ui/components";
import { Avatar } from "@/components/once-ui/components/Avatar";
import { Icon } from "@/components/once-ui/components/Icon";
import { IconButton } from "@/components/once-ui/components/IconButton";
import { Tag } from "@/components/once-ui/components/Tag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { about, baseURL, person, social } from "../../resources";
import TableOfContents from "./components/TableOfContents";

export function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
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

function groupWorkExperiences(experiences: any[]) {
  return experiences.reduce((acc, exp, index, array) => {
    if (index === 0 || exp.company !== array[index - 1].company) {
      acc.push(exp);
    } else {
      const prevDifferentCompanyIndex = array
        .slice(0, index)
        .findLastIndex((e) => e.company !== exp.company);
      if (
        prevDifferentCompanyIndex === -1 ||
        prevDifferentCompanyIndex === index - 1
      ) {
        // No other company in between, update the existing entry
        acc[acc.length - 1] = exp;
      } else {
        // There was another company in between, add as a new entry
        acc.push(exp);
      }
    }
    return acc;
  }, []);
}

const structure = [
  {
    title: about.intro.title,
    display: about.intro.display,
    items: [],
  },
  {
    title: about.work.title,
    display: about.work.display,
    items: Array.from<string>(
      new Set(
        groupWorkExperiences(about.work.experiences).map(
          (experience: { company: any }) => experience.company
        )
      )
    ),
  },
  {
    title: about.studies.title,
    display: about.studies.display,
    items: about.studies.institutions.map((institution) => institution.name),
  },
  {
    title: about.technical.title,
    display: about.technical.display,
    items: about.technical.skills.map((skill) => skill.title),
  },
];

export default function About() {
  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `https://${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Flex
          style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          direction="column"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Flex>
      )}
      <Flex fillWidth mobileDirection="column" justifyContent="center">
        {about.avatar.display && (
          <ScrollReveal delay={0.1}>
            <Flex
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              direction="column"
              alignItems="center"
            >
              <Avatar src={person.avatar} size="xl" />
              <Flex gap="8" alignItems="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Flex>
              {person.languages.length > 0 && (
                <Flex wrap gap="8">
                  {person.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Flex>
          </ScrollReveal>
        )}
        <Flex
          className={styles.blockAlign}
          fillWidth
          flex={9}
          maxWidth={40}
          direction="column"
        >
          <ScrollReveal delay={0}>
            <Flex
              id={about.intro.title}
              fillWidth
              minHeight="160"
              direction="column"
              justifyContent="center"
              marginBottom="32"
            >
              {about.calendar.display && (
                <Flex
                  className={styles.blockAlign}
                  style={{
                    backdropFilter: "blur(var(--static-space-1))",
                    border: "1px solid var(--brand-alpha-medium)",
                    width: "fit-content",
                  }}
                  alpha="brand-weak"
                  radius="full"
                  fillWidth
                  padding="4"
                  gap="8"
                  marginBottom="m"
                  alignItems="center"
                >
                  <Flex paddingLeft="12">
                    <Icon name="calendar" onBackground="brand-weak" />
                  </Flex>
                  <Flex paddingX="8">Schedule a call</Flex>
                  <IconButton
                    href={about.calendar.link}
                    data-border="rounded"
                    variant="tertiary"
                    icon="chevronRight"
                  />
                </Flex>
              )}
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {person.name}
              </h1>
              <Text
                className={styles.textAlign}
                variant="display-default-xs"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>
              {social.length > 0 && (
                <Flex
                  className={styles.blockAlign}
                  paddingTop="20"
                  paddingBottom="8"
                  gap="8"
                  wrap
                >
                  {social.map(
                    (item) =>
                      item.link && (
                        <Button
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="tertiary"
                        />
                      )
                  )}
                </Flex>
              )}
            </Flex>
          </ScrollReveal>

          {about.intro.display && (
            <ScrollReveal delay={0.15}>
              <Flex
                direction="column"
                textVariant="body-default-l"
                fillWidth
                gap="m"
                marginBottom="xl"
              >
                {about.intro.description}
              </Flex>
            </ScrollReveal>
          )}

          {about.work.display && (
            <>
              <ScrollReveal>
                <Heading
                  as="h2"
                  id={about.work.title}
                  variant="display-strong-s"
                  marginBottom="m"
                >
                  {about.work.title}
                </Heading>
              </ScrollReveal>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => {
                  const isFirstOfCompany =
                    index === 0 ||
                    about.work.experiences[index - 1].company !== experience.company;
                  const blockId = isFirstOfCompany
                    ? experience.company
                    : `${experience.company}-${index}`;
                  return (
                  <ScrollReveal
                    key={`${experience.company}-${experience.role}-${index}`}
                    delay={index * 0.06}
                  >
                    <Flex fillWidth direction="column">
                      <Flex
                        fillWidth
                        justifyContent="space-between"
                        alignItems="flex-end"
                        marginBottom="4"
                      >
                        <Text id={blockId} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text
                        variant="body-default-s"
                        onBackground="brand-weak"
                        marginBottom="m"
                      >
                        {experience.role}
                      </Text>
                      <Flex as="ul" direction="column" gap="16">
                        {experience.achievements.map((achievement, i) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${i}`}
                          >
                            {achievement}
                          </Text>
                        ))}
                      </Flex>
                      {experience.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                          {experience.images.map((image, i) => (
                            <Flex
                              key={i}
                              border="neutral-medium"
                              borderStyle="solid-1"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Flex>
                  </ScrollReveal>
                  );
                })}
              </Flex>
            </>
          )}

          {about.studies.display && (
            <>
              <ScrollReveal>
                <Heading
                  as="h2"
                  id={about.studies.title}
                  variant="display-strong-s"
                  marginBottom="m"
                >
                  {about.studies.title}
                </Heading>
              </ScrollReveal>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <ScrollReveal
                    key={`${institution.name}-${index}`}
                    delay={index * 0.08}
                  >
                    <Flex fillWidth gap="4" direction="column">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.description}
                      </Text>
                    </Flex>
                  </ScrollReveal>
                ))}
              </Flex>
            </>
          )}

          {about.technical.display && (
            <>
              <ScrollReveal>
                <Heading
                  as="h2"
                  id={about.technical.title}
                  variant="display-strong-s"
                  marginBottom="40"
                >
                  {about.technical.title}
                </Heading>
              </ScrollReveal>
              <Flex direction="column" fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <ScrollReveal
                    key={`${skill.title}-${index}`}
                    delay={index * 0.08}
                  >
                    <Flex fillWidth gap="4" direction="column">
                      <Text variant="heading-strong-l">{skill.title}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {skill.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" gap="12" wrap>
                          {skill.images.map((image, i) => (
                            <Flex
                              key={i}
                              border="neutral-medium"
                              borderStyle="solid-1"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Flex>
                  </ScrollReveal>
                ))}
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
