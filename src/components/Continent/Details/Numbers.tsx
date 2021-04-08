import { HStack } from "@chakra-ui/react";

import { Number } from "./Number";

import { Continent } from "../../../types/homeInterface";
interface NumbersProps {
  continent: Continent;
}

export function Numbers({ continent }: NumbersProps): JSX.Element {
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
          number: continent.countries,
        }}
      />

      <Number
        data={{
          name: "línguas",
          number: continent.languages,
        }}
      />

      <Number
        data={{
          name: "cidades",
          number: continent.cities.length,
        }}
        tooltip={`${continent.cities.length} Cidades para Conhecer!`}
      />
    </HStack>
  );
}
