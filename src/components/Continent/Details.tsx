import { Flex, Text, HStack, Tooltip, Icon, Box } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function Details(): JSX.Element {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      px="8.75rem"
      mt="5rem"
    >
      <Text fontSize="1.5rem" textAlign="justify" w="37.5rem">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <HStack
        display="flex"
        ml="4.375rem"
        align="center"
        justify="center"
        spacing="2.625rem"
      >
        <Flex direction="column">
          <Text as="h4" fontWeight="600" fontSize="3rem" color="highlight.500">
            50
          </Text>
          <Text as="strong" fontWeight="600" fontSize="1.5rem">
            países
          </Text>
        </Flex>

        <Flex direction="column">
          <Text as="h4" fontWeight="600" fontSize="3rem" color="highlight.500">
            60
          </Text>
          <Text as="strong" fontWeight="600" fontSize="1.5rem">
            línguas
          </Text>
        </Flex>

        <Flex direction="column">
          <Text as="h4" fontWeight="600" fontSize="3rem" color="highlight.500">
            + 100
          </Text>
          <Text as="strong" fontWeight="600" fontSize="1.5rem">
            cidades{" "}
            <Tooltip
              hasArrow
              label="127 Cidades para Conhecer"
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
      </HStack>
    </Flex>
  );
}
