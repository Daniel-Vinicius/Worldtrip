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

import { Continent, City } from "../../types/homeInterface";

interface CardProps {
  city: City;
}

function Card({ city }: CardProps) {
  return (
    <Center cursor="pointer">
      <Box maxW="270px" w="full" bg="white" rounded="md" overflow="hidden">
        <Image h="170px" w="full" src={city.image} objectFit="cover" />

        <Box p={6}>
          <Stack spacing="1rem" align="flex-start" mb={5}>
            <Heading fontSize="1.25rem" fontWeight="600">
              {city.name}
            </Heading>
            <Text color={"gray.500"}>{city.city_country}</Text>
          </Stack>
          <Flex h="100%" justify="flex-end" align="center" mt="-4rem">
            <Avatar
              size="1.875rem"
              maxH="1.875rem"
              maxW="1.875rem"
              src={city.flag}
              alt={`country flag ${city.city_country}`}
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

interface CitiesProps {
  continent: Continent;
}

export function Cities({ continent }: CitiesProps): JSX.Element {
  const cities = continent.cities;

  return (
    <Flex w="100%" mt="5rem" direction="column">
      <Heading
        fontWeight="500"
        fontSize="2.25rem"
        mb="2.5rem"
        mx={["1rem", "auto", "auto", "auto", "auto", "8.75rem"]}
      >
        Cidades {cities.length}
      </Heading>
      <Wrap spacing="2.8rem" align="center" justify="center" minW="22.5rem">
        {cities.map((city) => (
          <WrapItem key={city.name}>
            <Card city={city} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}
