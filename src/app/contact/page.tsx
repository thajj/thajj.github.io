import { Flex, Heading, Text, Button } from "@/components/once-ui/components";
import { about, baseURL, contact, social } from "@/resources";

export function generateMetadata() {
  const title = contact.title;
  const description = contact.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/contact`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Contact() {
  const emailLink = social.find((s) => s.link?.startsWith("mailto:"));
  const calendarLink = about.calendar.display ? about.calendar.link : null;

  return (
    <Flex fillWidth maxWidth="s" direction="column" gap="l">
      <Heading variant="display-strong-s">{contact.title}</Heading>
      <Text variant="body-default-m" onBackground="neutral-weak">
        {contact.description}
      </Text>
      <Flex direction="column" gap="m">
        {calendarLink && (
          <Button
            href={calendarLink}
            variant="tertiary"
            size="m"
            prefixIcon="calendar"
          >
            Schedule a call
          </Button>
        )}
        {emailLink?.link && (
          <Button
            href={emailLink.link}
            variant="tertiary"
            size="m"
            prefixIcon="email"
          >
            Email me
          </Button>
        )}
        <Flex gap="s" wrap paddingTop="s">
          {social
            .filter((item) => item.link && !item.link.startsWith("mailto:"))
            .map((item) => (
              <Button
                key={item.name}
                href={item.link}
                variant="tertiary"
                size="s"
                prefixIcon={item.icon}
              >
                {item.name}
              </Button>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
