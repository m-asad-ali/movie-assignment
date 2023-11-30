import * as React from "react";
import { Box, ThemeProvider } from "@mui/system";

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#F3EEEA",
            dark: "#EBE3D5",
          },
        },
      }}
    >
      <Box
        sx={{
          height: 300,
          borderRadius: 10,
          marginTop: 5,
          marginBottom: 5,
          marginLeft: "2.5%",
          marginRight: "2.5%",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
    </ThemeProvider>
  );
}
