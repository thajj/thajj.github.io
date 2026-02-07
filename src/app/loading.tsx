import { Flex, Spinner } from "@/components/once-ui/components";

export default function Loading() {
  return (
    <Flex fillWidth paddingY="128" justifyContent="center" alignItems="center">
      <Spinner />
    </Flex>
  );
}
