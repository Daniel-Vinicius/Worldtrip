import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MyTheme } from "../styles/theme";

import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={MyTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
