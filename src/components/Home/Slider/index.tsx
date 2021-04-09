import { Swiper, SwiperSlide } from "swiper/react";

import { Flex } from "@chakra-ui/react";

import { Slide } from "./Slide";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import { ContinentsResponse } from "../../../types/homeInterface";

type SliderProps = ContinentsResponse;

export function Slider({ continents }: SliderProps): JSX.Element {
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
        pagination={{ clickable: true }}
        id="main"
        tag="section"
        slidesPerView={1}
        autoplay={{
          delay: 4000,
        }}
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
