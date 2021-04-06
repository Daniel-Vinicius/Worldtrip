import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";

import { Banner } from "../components/Continent/Banner";
import { Details } from "../components/Continent/Details";
import { Cities } from "../components/Continent/Cities";

export default function Continent(): JSX.Element {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
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
