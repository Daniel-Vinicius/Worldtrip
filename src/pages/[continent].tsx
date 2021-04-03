import Head from "next/head";

import { Flex, Box } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { GetStaticPaths, GetStaticProps } from "next";

interface ContinentProps {
  continent: string;
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" h="100%" maxWidth="8xl" mx="auto" direction="column">
          <h1>{continent[0].toUpperCase() + continent.substr(1)}</h1>
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
