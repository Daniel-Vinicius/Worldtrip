import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";

import { Banner } from "../components/Continent/Banner";
import { Details } from "../components/Continent/Details";
import { Cities } from "../components/Continent/Cities";

interface ContinentProps {
  continent: string;
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {continent[0].toUpperCase() + continent.substr(1)} | Worldtrip
        </title>
      </Head>
      <Flex direction="column" h="100vh" overflowX="hidden">
        <Header backButton />
        <Banner />
        <Flex w="100%" h="100%" maxWidth="8xl" mx="auto" direction="column">
          <Details />
          <Cities />
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
