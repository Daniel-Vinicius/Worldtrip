import Link from "next/link";

import { Flex, VStack, Heading } from "@chakra-ui/react";

import { Continent } from "../../../types/homeInterface";

interface SlideProps {
  continent: Continent;
}

export function Slide({
  continent: { image, slug, name, short_description },
}: SlideProps): JSX.Element {
  return (
    <Flex
      align="center"
      justify="center"
      bg={`url(${image}) center`}
      w="100%"
      h="100%"
    >
      <Link href={`/${slug}`}>
        <VStack
          spancing="1rem"
          style={{
            cursor: "pointer",
          }}
        >
          <Heading
            fontSize={["1.5rem", "3rem"]}
            fontWeight="700"
            color="text.white"
          >
            {name}
          </Heading>
          <Heading
            fontSize={["0.875rem", "1.5rem"]}
            fontWeight="700"
            color="text.white"
          >
            {short_description}
          </Heading>
        </VStack>
      </Link>
    </Flex>
  );
}
