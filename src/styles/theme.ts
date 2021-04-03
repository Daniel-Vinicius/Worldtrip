import { extendTheme, theme } from "@chakra-ui/react";

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
      body: {
        bg: "text.white",
        color: "text.dark",
      },
    },
  },
});
