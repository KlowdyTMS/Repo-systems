import {
  Flex,
  IconButton,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export function LeftBarFooter() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems={"center"} flexDirection={"column"}>
      <Tooltip label={"Trocar tema"} placement={"right"} hasArrow>
        <IconButton
          aria-label="darkMode"
          icon={colorMode === "dark" ? <FaMoon /> : <BsSunFill />}
          borderRadius={"full"}
          onClick={toggleColorMode}
        />
      </Tooltip>
      <Text mt={"5"} fontSize="2xs">
        Version 1.1.1
      </Text>
    </Flex>
  );
}
