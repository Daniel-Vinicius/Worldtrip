import { extendTheme } from "@chakra-ui/react";

export const MyTheme = extendTheme({
  colors: {
    highlight: {
      "500": "#FFBA08",
      "50": "rgba(255, 186, 8, 0.5)",
    },
    text: {
      dark: "#47585B",
      white: "#F5F8FA",
      info: "#999999",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      ".swiper-pagination-bullet": {
        bg: "text.info",
        h: "1rem",
        w: "1rem",
      },
      ".swiper-pagination-bullet-active": {
        bg: "highlight.500",
      },
      ".swiper-button-prev, .swiper-button-next": {
        color: "highlight.500",
        w: "3.75rem",
        h: "3.75rem",
      },
      body: {
        bg: "text.white",
        color: "text.dark",
      },
    },
  },
});
