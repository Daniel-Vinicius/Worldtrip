import {
  Flex,
  Image,
  Text,
  ImageProps,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { GiPlainCircle } from "react-icons/gi";

interface TravelTypeProps extends ImageProps {
  travel: string;
  mobile?: boolean;
}

export function TravelType({
  travel,
  mobile = false,
  ...rest
}: TravelTypeProps): JSX.Element {
  if (mobile === true) {
    return (
      <ListItem maxH="1.5rem" mx="auto" mb="1.5rem" px="1rem">
        <ListIcon
          as={GiPlainCircle}
          color="highlight.500"
          size="0.5rem"
          mb="2%"
        />
        <Text as="strong" fontWeight="600" fontSize="1.5rem">
          {travel}
        </Text>
      </ListItem>
    );
  }

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
