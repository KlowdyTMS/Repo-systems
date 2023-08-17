import { Flex } from "@chakra-ui/react";
import { SwitchThemeButton } from "../SwitchThemeButton/SwitchThemeButton";

export function LeftBarFooter() {
  return (
    <Flex alignItems={"center"} flexDirection={"column"}>
      <SwitchThemeButton />
    </Flex>
  );
}
