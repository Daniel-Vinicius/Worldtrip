import { Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

export function Slider() {
  return (
    <Flex w="100%">
      <Swiper>
        <SwiperSlide>
          <Image src="/slider/europe.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider/europe.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider/europe.svg" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
