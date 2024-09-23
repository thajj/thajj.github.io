import { Flex, IconButton, Text } from "./once-ui/components";
import { person, social } from "../resources";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="4"
      justifyContent="center"
    >
      <Flex
        fillWidth
        maxWidth="m"
        paddingY="4"
        paddingX="16"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} / </Text>
          <Text>{person.name}</Text>
        </Text>
        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              )
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
