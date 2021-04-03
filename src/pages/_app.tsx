import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MyTheme } from "../styles/theme";

import "swiper/swiper.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={MyTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
