import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";

import { Banner } from "../components/Continent/Banner";
import { Details } from "../components/Continent/Details";
import { Cities } from "../components/Continent/Cities";
import { Loading } from "../components/Continent/Loading";

import { Continent as ContinentI } from "../types/homeInterface";

import api from "../services/api";

interface ContinentProps {
  continent: ContinentI;
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>
      <Flex direction="column" h="100vh" overflowX="hidden">
        <Header backButton />
        <Banner continent={continent} />
        <Flex w="100%" h="100%" maxWidth="8xl" mx="auto" direction="column">
          <Details continent={continent} />
          <Cities continent={continent} />
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
  const { continent: continentSlug } = params;
  const { data } = await api.get<ContinentI[]>(`/continents`);

  const continent = data.find((continent) => continent.slug === continentSlug);

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
