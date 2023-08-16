import {
  ChakraProvider,
  Flex,
  createLocalStorageManager,
} from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./layouts/sidebar/Sidebar";
import NotFound from "./pages/errors/NotFound";
import theme from "./themes/config";

function App() {
  const colorModeManager = createLocalStorageManager("@color-mode");

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <ErrorBoundary FallbackComponent={NotFound}>
        <Flex flexDirection={"row"}>
          <Sidebar />
          <Flex ml={"32"} flexDirection={"column"} w={"full"}>
            <Outlet />
          </Flex>
        </Flex>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
