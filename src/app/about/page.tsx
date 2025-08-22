import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "../../components/once-ui/components";
import { person, about, social, baseURL } from "../../resources";
import TableOfContents from "./components/TableOfContents";
import styles from "./about.module.scss";

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
      url: `https://${baseURL}/work`,
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

// Add this function to group consecutive work experiences by company
function groupWorkExperiences(experiences: any[]) {
  const grouped: any[] = [];

  for (let i = 0; i < experiences.length; i++) {
    const currentExp = experiences[i];

    // Check if this is the first occurrence of this company or if it's consecutive
    if (i === 0 || currentExp.company !== experiences[i - 1].company) {
      grouped.push(currentExp.company);
    }
    // If it's the same company as previous, we skip adding it again
  }

  return grouped;
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
    items: groupWorkExperiences(about.work.experiences),
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
  const hasTableOfContents = about.tableOfContent.display;

  return (
    <>
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
            image: `${baseURL}/images/${person.avatar}`,
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
      <Flex fillWidth direction="column" alignItems="center">
        <Flex
          fillWidth
          position="relative"
          justifyContent="center"
          style={{ maxWidth: hasTableOfContents ? "1400px" : "800px" }}
        >
          {/* Table of Contents - Fixed on larger screens */}
          {hasTableOfContents && (
            <Flex
              style={{
                position: "sticky",
                top: "120px",
                height: "fit-content",
                width: "200px",
                flexShrink: 0,
              }}
              paddingRight="xl"
              direction="column"
              hide="s"
            >
              <TableOfContents structure={structure} about={about} />
            </Flex>
          )}

          {/* Main Content */}
          <Flex
            fillWidth
            maxWidth={hasTableOfContents ? "l" : "m"}
            direction="column"
            style={{
              flex: 1,
              paddingLeft: hasTableOfContents ? "0" : undefined,
            }}
          >
            <Flex fillWidth mobileDirection="column" justifyContent="center">
              {about.avatar.display && (
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
              )}
              <Flex className={styles.blockAlign} fillWidth flex={9} maxWidth={40} direction="column">
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
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{person.name}</h1>
                  <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
                    {person.role}
                  </Text>
                  {social.length > 0 && (
                    <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap>
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
                          ),
                      )}
                    </Flex>
                  )}
                </Flex>

                {about.intro.display && (
                  <Flex direction="column" textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                    {about.intro.description}
                  </Flex>
                )}

                {about.work.display && (
                  <>
                    <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                      {about.work.title}
                    </Heading>
                    <Flex direction="column" fillWidth gap="l" marginBottom="40">
                      {about.work.experiences.map((experience, index) => (
                        <Flex key={`${experience.company}-${experience.role}-${index}`} fillWidth direction="column">
                          <Flex fillWidth justifyContent="space-between" alignItems="flex-end" marginBottom="4">
                            <Text id={experience.company} variant="heading-strong-l">
                              {experience.company}
                            </Text>
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                              {experience.timeframe}
                            </Text>
                          </Flex>
                          <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                            {experience.role}
                          </Text>
                          <Flex as="ul" direction="column" gap="16">
                            {experience.achievements.map((achievement, index) => (
                              <Text as="li" variant="body-default-m" key={`${experience.company}-${index}`}>
                                {achievement}
                              </Text>
                            ))}
                          </Flex>
                          {experience.images.length > 0 && (
                            <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                              {experience.images.map((image, index) => (
                                <Flex
                                  key={index}
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
                      ))}
                    </Flex>
                  </>
                )}

                {about.studies.display && (
                  <>
                    <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                      {about.studies.title}
                    </Heading>
                    <Flex direction="column" fillWidth gap="l" marginBottom="40">
                      {about.studies.institutions.map((institution, index) => (
                        <Flex key={`${institution.name}-${index}`} fillWidth gap="4" direction="column">
                          <Text id={institution.name} variant="heading-strong-l">
                            {institution.name}
                          </Text>
                          <Text variant="heading-default-xs" onBackground="neutral-weak">
                            {institution.description}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </>
                )}

                {about.technical.display && (
                  <>
                    <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="40">
                      {about.technical.title}
                    </Heading>
                    <Flex direction="column" fillWidth gap="l">
                      {about.technical.skills.map((skill, index) => (
                        <Flex key={`${skill}-${index}`} fillWidth gap="4" direction="column">
                          <Text variant="heading-strong-l">{skill.title}</Text>
                          <Text variant="body-default-m" onBackground="neutral-weak">
                            {skill.description}
                          </Text>
                          {skill.images.length > 0 && (
                            <Flex fillWidth paddingTop="m" gap="12" wrap>
                              {skill.images.map((image, index) => (
                                <Flex
                                  key={index}
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
                      ))}
                    </Flex>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
