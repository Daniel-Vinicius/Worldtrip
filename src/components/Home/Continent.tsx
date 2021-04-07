import { Flex, Heading } from "@chakra-ui/react";

export function Continent(): JSX.Element {
  return (
    <Flex
      w={["100%", "100%", "100%", "50rem"]}
      mx="auto"
      align="center"
      justify="center"
      mt="3.25rem"
      direction="column"
    >
      <Heading
        fontWeight="500"
        fontSize={["1.5rem", "1.75rem", "1.75rem", "2.25rem"]}
        color="text.dark"
      >
        Vamos nessa?
      </Heading>
      <Heading
        fontWeight="500"
        fontSize={["1.25rem", "1.75rem", "1.75rem", "2.25rem"]}
        color="text.dark"
      >
        Então escolha seu continente
      </Heading>
    </Flex>
  );
}
