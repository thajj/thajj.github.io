"use client";

import { Flex, Heading, Text, Button } from "@/components/once-ui/components";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Flex
      as="section"
      direction="column"
      alignItems="center"
      justifyContent="center"
      paddingY="128"
      gap="m"
    >
      <Heading variant="display-strong-s">Something went wrong</Heading>
      <Text onBackground="neutral-weak" variant="body-default-m">
        An unexpected error occurred. Please try again.
      </Text>
      <Button onClick={reset} variant="tertiary" size="m">
        Try again
      </Button>
    </Flex>
  );
}
