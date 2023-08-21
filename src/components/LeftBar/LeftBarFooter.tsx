import { Flex } from "@chakra-ui/react";
import { SwitchThemeButton } from "../SwitchThemeButton/SwitchThemeButton";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";

export function LeftBarFooter() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      height={"24"}
    >
      <SwitchLanguage />
      <SwitchThemeButton />
    </Flex>
  );
}
