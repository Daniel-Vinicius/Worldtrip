import { Flex, Image } from "@chakra-ui/react";

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="8xl"
      minHeight="6.25rem"
      mx="auto"
      align="center"
      justify="center"
      px="6"
    >
      <Image src="/logo.svg" alt="WorldTrip" />
    </Flex>
  );
}
