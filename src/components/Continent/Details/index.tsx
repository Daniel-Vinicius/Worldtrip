import { Flex, Text } from "@chakra-ui/react";

import { Numbers } from "./Numbers";

import { Continent } from "../../../types/homeInterface";

interface DetailsProps {
  continent: Continent;
}

export function Details({ continent }: DetailsProps): JSX.Element {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      px={["1rem", "1rem", "1rem", "8.75rem"]}
      mt={["1.5rem", "1.5rem", "1.5rem", "5rem"]}
      direction={["column", "column", "column", "row"]}
    >
      <Text
        fontSize={["0.875rem", "0.875rem", "0.875rem", "1.5rem"]}
        textAlign="justify"
        w="100%"
        mb={["1rem", "1rem", "1rem", "0"]}
      >
        {continent.long_description}
      </Text>
      <Numbers continent={continent} />
    </Flex>
  );
}
