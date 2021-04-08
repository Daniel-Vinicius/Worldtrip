import Head from "next/head";
import { GetStaticProps } from "next";

import { Flex, Box } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { TravelTypes } from "../components/Home/TravelTypes";
import { Continent } from "../components/Home/Continent";
import { Slider } from "../components/Home/Slider";

import api from "../services/api";

import {
  ContinentsResponse,
  Continent as ContinentI,
} from "../types/homeInterface";

export default function Home({ continents }: ContinentsResponse): JSX.Element {
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
          <Box
            borderTop="2px solid #47585B"
            mt={["2.25rem", "5rem"]}
            w="5.625rem"
            mx="auto"
          />
          <Continent />
          <Slider continents={continents} />
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<ContinentI[]>("/continents");

  // mostra todos os 6 continentes
  // console.log(data);

  return {
    props: {
      continents: data,
    },
    revalidate: 60 * 60 * 24 * 7, // one week, 7 days,
  };
};
