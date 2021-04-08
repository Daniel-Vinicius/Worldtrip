import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export function Card() {
  return (
    <Center cursor="pointer">
      <Box maxW="270px" w="full" bg="white" rounded="md" overflow="hidden">
        <Image h="170px" w="full" src="/cities/london.svg" objectFit="cover" />

        <Box p={6}>
          <Stack spacing="1rem" align="flex-start" mb={5}>
            <Heading fontSize="1.25rem" fontWeight="600">
              Londres
            </Heading>
            <Text color={"gray.500"}>Reino Unido</Text>
          </Stack>
          <Flex h="100%" justify="flex-end" align="center" mt="-4rem">
            <Avatar
              size="1.875rem"
              src="/cities/flag.svg"
              alt={"Countrie"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}

export function Cities(): JSX.Element {
  return (
    <Flex w="100%" mt="5rem" direction="column">
      <Heading
        fontWeight="500"
        fontSize="2.25rem"
        mb="2.5rem"
        mx={["1rem", "auto", "auto", "auto", "auto", "8.75rem"]}
      >
        Cidades + 100
      </Heading>
      <Wrap spacing="2.8rem" align="center" justify="center" minW="22.5rem">
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
