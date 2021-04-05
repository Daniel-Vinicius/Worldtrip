import { Flex, Heading, Image, Text, VStack, Box } from "@chakra-ui/react";

export function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      bg="url(/bgHome.svg) center"
      px="8.75rem"
    >
      <VStack spacing="20px" mr="12.5rem" maxW="1440px">
        <Heading
          fontWeight="500"
          fontSize="2.25rem"
          color="text.white"
          lineHeight="3.375rem"
        >
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text color="text.info" fontSize="1.25rem">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </VStack>
      <Image src="/airplane.svg" />
    </Flex>
  );
}
