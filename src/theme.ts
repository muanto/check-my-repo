import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "Nunito" }, // Font di sistema o fallback
        heading: { value: "Nunito" }, // Font serif per le intestazioni
      },
    },
  },
});

const theme = createSystem(defaultConfig, config);
export default theme;
