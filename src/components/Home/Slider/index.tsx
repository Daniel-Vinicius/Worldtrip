import { Swiper, SwiperSlide } from "swiper/react";

import { Flex } from "@chakra-ui/react";

import { continents } from "./Continents";

import { Slide } from "./Slide";

export function Slider(): JSX.Element {
  return (
    <Flex
      w="100%"
      maxW="77.5rem"
      mx="auto"
      mt="5rem"
      pb={["2rem", "3rem", "3rem", "5rem"]}
      minH={["15.625rem", "28.125rem"]}
    >
      <Swiper
        navigation
        pagination
        id="main"
        tag="section"
        slidesPerView={1}
        spaceBetween={0}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide
            key={continent.id}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Slide continent={continent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
