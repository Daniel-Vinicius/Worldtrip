import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

export function Banner(): JSX.Element {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <Flex
      w="100%"
      align="center"
      justify={["center", "center", "center", "space-between"]}
      bg="url(/home/bgHome.svg) center"
      px={["1rem", "1rem", "1rem", "8.75rem"]}
      py={["1.75rem", "1.75rem", "1.75rem", "0"]}
    >
      <VStack spacing="20px" mr={["0", "0", "0", "12.5rem"]}>
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
      {isLargerThan900 && (
        <Image
          src="/home/airplane.svg"
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform="translateY(48px)"
        />
      )}
    </Flex>
  );
}
