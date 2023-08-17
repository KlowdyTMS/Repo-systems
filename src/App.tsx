import {
  ChakraProvider,
  Flex,
  createLocalStorageManager,
  useMediaQuery,
} from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./layouts/sidebar/Sidebar";
import NotFound from "./pages/errors/NotFound";
import theme from "./themes/config";

function App() {
  const colorModeManager = createLocalStorageManager("@color-mode");
  const [mobile] = useMediaQuery("(max-width: 767px)");

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <ErrorBoundary FallbackComponent={NotFound}>
        <Flex flexDirection={mobile ? "column" : "row"} w={"full"}>
          <Sidebar />
          <Flex ml={{ sm: "0", md: "20" }} flexDirection={"column"} w={"full"}>
            <Outlet />
          </Flex>
        </Flex>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
