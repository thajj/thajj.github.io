import { Flex, Heading, Text, Button } from "@/components/once-ui/components";

export function NotFoundContent() {
  return (
    <Flex
      as="section"
      direction="column"
      alignItems="center"
      gap="l"
      paddingY="xl"
    >
      <Text variant="display-strong-xl">404</Text>
      <Heading variant="display-strong-xs">Page Not Found</Heading>
      <Text onBackground="neutral-weak" marginBottom="s">
        The page you are looking for does not exist.
      </Text>
      <Button href="/" variant="tertiary" size="m" prefixIcon="chevronLeft">
        Back to Home
      </Button>
    </Flex>
  );
}
