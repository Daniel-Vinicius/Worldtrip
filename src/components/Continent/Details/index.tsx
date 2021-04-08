import { Flex, Text } from "@chakra-ui/react";

import { Numbers } from "./Numbers";

export function Details(): JSX.Element {
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
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Numbers />
    </Flex>
  );
}
