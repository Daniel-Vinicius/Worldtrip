import { Flex, List, useMediaQuery, Stack } from "@chakra-ui/react";

import { TravelType } from "./TravelType";
import { IsMobile } from "../IsMobile";

export function TravelTypes(): JSX.Element {
  const [isLargerThan900] = useMediaQuery(IsMobile);

  const isMobile = Boolean(isLargerThan900);

  if (isMobile === true) {
    return (
      <Flex w="100%" align="center" justify="center" mt="5rem" px="1rem">
        <List
          display="flex"
          flexWrap="wrap"
          flexGrow={1}
          align="center"
          justifyContent="center"
        >
          <TravelType
            travel="vida noturna"
            src="/home/travel_types/cocktail.svg"
            mobile
          />
          <TravelType travel="praia" src="/home/travel_types/surf.svg" mobile />
          <TravelType
            travel="moderno"
            src="/home/travel_types/building.svg"
            mobile
          />
          <TravelType
            travel="clássico"
            src="/home/travel_types/museum.svg"
            mobile
          />
          <TravelType
            travel="e mais..."
            src="/home/travel_types/earth.svg"
            mobile
          />
        </List>
      </Flex>
    );
  }

  return (
    <Flex w="100%" align="center" justify="center" mt="5rem">
      <Stack
        spacing="8.125rem"
        direction={["column", "column", "column", "row"]}
      >
        <TravelType
          travel="vida noturna"
          src="/home/travel_types/cocktail.svg"
        />
        <TravelType travel="praia" src="/home/travel_types/surf.svg" />
        <TravelType travel="moderno" src="/home/travel_types/building.svg" />
        <TravelType travel="clássico" src="/home/travel_types/museum.svg" />
        <TravelType travel="e mais..." src="/home/travel_types/earth.svg" />
      </Stack>
    </Flex>
  );
}
