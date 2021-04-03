import { Flex, Image, Text, HStack, ImageProps } from "@chakra-ui/react";

interface TravelTypeProps extends ImageProps {
  travel: string;
}

function TravelType({ travel, ...rest }: TravelTypeProps): JSX.Element {
  return (
    <Flex direction="column" align="center" justify="center">
      <Image w="5.3125.rem" h="5.3125.rem" {...rest} />
      <Text
        as="strong"
        fontWeight="600"
        fontSize="1.5rem"
        lineHeight="2.25rem"
        mt="1.5rem"
      >
        {travel}
      </Text>
    </Flex>
  );
}

export function TravelTypes(): JSX.Element {
  return (
    <Flex w="100%" align="center" justify="center" mt="5rem">
      <HStack spacing="8.125rem">
        <TravelType travel="vida noturna" src="/travel/cocktail.svg" />
        <TravelType travel="praia" src="/travel/surf.svg" />
        <TravelType travel="moderno" src="/travel/building.svg" />
        <TravelType travel="clássico" src="/travel/museum.svg" />
        <TravelType travel="e mais..." src="/travel/earth.svg" />
      </HStack>
    </Flex>
  );
}
