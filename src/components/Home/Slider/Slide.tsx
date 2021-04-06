import Link from "next/link";

import { Flex, VStack, Heading } from "@chakra-ui/react";

interface SlideProps {
  continent: {
    id: number;
    image: string;
    name: string;
    description: string;
    slug: string;
  };
}

export function Slide({
  continent: { image, name, description, slug },
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
          <Heading fontSize="3rem" fontWeight="700" color="text.white">
            {name}
          </Heading>
          <Heading fontSize="1.5rem" fontWeight="700" color="text.white">
            {description}
          </Heading>
        </VStack>
      </Link>
    </Flex>
  );
}
