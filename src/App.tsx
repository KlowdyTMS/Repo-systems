import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import NotFound from "./pages/errors/NotFound";
import theme from "./themes/config";

function App() {
  const colorModeManager = createLocalStorageManager("@color-mode");

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <ErrorBoundary FallbackComponent={NotFound}>
        <Outlet />
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
