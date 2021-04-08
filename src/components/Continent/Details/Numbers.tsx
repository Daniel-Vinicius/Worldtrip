import { HStack } from "@chakra-ui/react";

import { Number } from "./Number";

export function Numbers(): JSX.Element {
  return (
    <HStack
      spacing="2.625rem"
      w="100%"
      ml={["0", "0", "0", "4.375rem"]}
      display="flex"
      align="center"
      justify={["normal", "center"]}
    >
      <Number
        data={{
          name: "países",
          number: "50",
        }}
      />

      <Number
        data={{
          name: "línguas",
          number: "60",
        }}
      />

      <Number
        data={{
          name: "cidades",
          number: "+ 100",
        }}
        tooltip="127 Cidades para Conhecer!"
      />
    </HStack>
  );
}
