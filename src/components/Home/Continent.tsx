import { Flex, Heading } from "@chakra-ui/react";

export function Continent(): JSX.Element {
  return (
    <Flex
      w="50rem"
      mx="auto"
      align="center"
      justify="center"
      mt="3.25rem"
      direction="column"
    >
      <Heading
        fontWeight="500"
        fontSize="2.25rem"
        color="text.dark"
        lineHeight="3.375rem"
      >
        Vamos nessa?
      </Heading>
      <Heading
        fontWeight="500"
        fontSize="2.25rem"
        color="text.dark"
        lineHeight="3.375rem"
      >
        Então escolha seu continente
      </Heading>
    </Flex>
  );
}
