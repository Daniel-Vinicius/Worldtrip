import Link from "next/link";
import { Flex, Image, IconButton, Icon, useMediaQuery } from "@chakra-ui/react";

import { IoChevronBackOutline } from "react-icons/io5";

import { IsMobile } from "./Home/IsMobile";

interface HeaderProps {
  backButton?: boolean;
}

export function Header({ backButton = false }: HeaderProps): JSX.Element {
  const [isLargerThan900] = useMediaQuery(IsMobile);

  if (backButton === true) {
    return (
      <Flex
        as="header"
        w="100%"
        maxWidth="8xl"
        minHeight={["3.125rem", "3.125rem", "3.125rem", "6.25rem"]}
        mx="auto"
        align="center"
        justify="space-between"
        px="1rem"
      >
        <Link href="/">
          <IconButton
            aria-label="Back Homepage"
            bg="transparent"
            icon={
              <Icon as={IoChevronBackOutline} color="text.dark" size="1rem" />
            }
          />
        </Link>

        {isLargerThan900 ? (
          <Image
            src="/logo.svg"
            alt="WorldTrip"
            w="5rem"
            h="1.25rem"
            ml="-1rem"
          />
        ) : (
          <Image src="/logo.svg" alt="WorldTrip" />
        )}

        <Flex />
      </Flex>
    );
  }

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="8xl"
      minHeight="6.25rem"
      mx="auto"
      align="center"
      justify="center"
      px="6"
    >
      <Image src="/logo.svg" alt="WorldTrip" />
    </Flex>
  );
}
