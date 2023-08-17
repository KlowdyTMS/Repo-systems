import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { AiFillCloud } from "react-icons/ai";
import { FaBan } from "react-icons/fa";

export function EmptyData() {
  const color = useColorModeValue("gray.100", "whiteAlpha.200");

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
        aria-label="ícone de nuvem"
        color={color}
        pointerEvents={"none"}
        size={"auto"}
        fontSize={"250px"}
        icon={<AiFillCloud />}
      />
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Nada encontrado
      </Text>
      <IconButton
        variant="unstyled"
        aria-label="sinal de vazio"
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
