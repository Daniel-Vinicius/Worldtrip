import { Flex, Heading } from "@chakra-ui/react";

export function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h="31.25rem"
      align="flex-start"
      justify="flex-start"
      bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/continent/europe.svg) center"
      px="8.75rem"
    >
      <Heading
        fontWeight="600"
        fontSize="3rem"
        color="text.white"
        lineHeight="18"
      >
        Europa
      </Heading>
    </Flex>
  );
}
