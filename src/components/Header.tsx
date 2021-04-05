import Link from "next/link";
import { Flex, Image, IconButton, Icon } from "@chakra-ui/react";

import { IoChevronBackOutline } from "react-icons/io5";

interface HeaderProps {
  backButton?: boolean;
}

export function Header({ backButton = false }: HeaderProps): JSX.Element {
  if (backButton === true) {
    return (
      <Flex
        as="header"
        w="100%"
        maxWidth="8xl"
        minHeight="6.25rem"
        mx="auto"
        align="center"
        justify="space-between"
        px="6"
      >
        <Link href="/">
          <IconButton
            aria-label="Back Homepage"
            bg="transparent"
            icon={
              <Icon as={IoChevronBackOutline} color="text.dark" size={20} />
            }
            ml="35"
          />
        </Link>

        <Image src="/logo.svg" alt="WorldTrip" />
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
