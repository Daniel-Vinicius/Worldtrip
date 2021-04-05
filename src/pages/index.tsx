import Head from "next/head";

import { Flex, Box } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { TravelTypes } from "../components/Home/TravelTypes";
import { Continent } from "../components/Home/Continent";
import { Slider } from "../components/Home/Slider";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Flex direction="column" h="100vh">
        <Header />
        <Banner />
        <Flex w="100%" h="100%" maxWidth="8xl" mx="auto" direction="column">
          <TravelTypes />
          <Box borderTop="2px solid #47585B" mt="5rem" w="5.625rem" mx="auto" />
          <Continent />
          {/* TODO  <Slider /> */}
        </Flex>
      </Flex>
    </>
  );
}
