import { Flex, Text, Tooltip, Icon, Box } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface Number {
  tooltip?: string;
  data: {
    name: string;
    number: number;
  };
}

export const Number = ({ tooltip, data }: Number): JSX.Element => {
  if (tooltip) {
    return (
      <Flex direction="column">
        <Text
          as="h4"
          fontWeight="600"
          fontSize={["1.25rem", "1.25rem", "1.25rem", "3rem"]}
          color="highlight.500"
        >
          {data.number}
        </Text>
        <Text
          as="strong"
          fontWeight={["400", "600"]}
          fontSize={["1.125rem", "1.125rem", "1.125rem", "1.5rem"]}
        >
          {data.name}{" "}
          <Tooltip
            hasArrow
            label={tooltip}
            aria-label="A tooltip"
            fontSize="sm"
            placement="bottom"
          >
            <Box display="inline">
              <Icon as={AiOutlineInfoCircle} color="text.info" />
            </Box>
          </Tooltip>
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column">
      <Text
        as="h4"
        fontWeight="600"
        fontSize={["1.25rem", "1.25rem", "1.25rem", "3rem"]}
        color="highlight.500"
      >
        {data.number}
      </Text>
      <Text
        as="strong"
        fontWeight={["400", "600"]}
        fontSize={["1.125rem", "1.125rem", "1.125rem", "1.5rem"]}
      >
        {data.name}
      </Text>
    </Flex>
  );
};
