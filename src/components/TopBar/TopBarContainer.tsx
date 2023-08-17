import { Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export function TopBarContainer(props: IProps) {
  const { children, ...rest } = props;
  const color = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Flex
      alignItems={"center"}
      flexDirection={"row"}
      h={"60px"}
      p={"4"}
      bgColor={color}
      position={"sticky"}
      {...rest}
    >
      {children}
    </Flex>
  );
}
