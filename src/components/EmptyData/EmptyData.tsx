import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { AiFillCloud } from "react-icons/ai";
import { FaBan } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function EmptyData() {
  const color = useColorModeValue("gray.100", "whiteAlpha.200");
  const { t } = useTranslation();

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={"20px 0 0 0"}
      width={"full"}
    >
      <IconButton
        variant="unstyled"
        aria-label="cloud icon"
        color={color}
        pointerEvents={"none"}
        size={"auto"}
        fontSize={"250px"}
        icon={<AiFillCloud />}
      />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        {t("nav.notFound")}
      </Text>
      <IconButton
        variant="unstyled"
        aria-label="empty sign"
        color={color}
        pointerEvents={"none"}
        fontSize={"80px"}
        position={"relative"}
        left={"0"}
        bottom={"190px"}
        icon={<FaBan />}
      />
    </Flex>
  );
}
