import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import theme from "./themes/config";
import { Outlet } from "react-router-dom";
import NotFound from "./pages/Errors/NotFound";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ErrorBoundary FallbackComponent={NotFound}>
        <Outlet />
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
