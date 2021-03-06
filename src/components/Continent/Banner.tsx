import { Flex, Heading } from "@chakra-ui/react";

import { Continent } from "../../types/homeInterface";

interface BannerProps {
  continent: Continent;
}

export function Banner({ continent }: BannerProps): JSX.Element {
  return (
    <Flex
      w="100%"
      minH={["9.375rem", "9.375rem", "31.25rem"]}
      align={["center", "center", "center", "flex-end"]}
      justify={["center", "center", "center", "flex-start"]}
      bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${continent.image}) center`}
      px="8.75rem"
    >
      <Heading
        fontWeight="600"
        fontSize={["1.125rem", "3rem"]}
        color="text.white"
        mb={["0", "0", "0", "3.75rem"]}
      >
        {continent.name}
      </Heading>
    </Flex>
  );
}
