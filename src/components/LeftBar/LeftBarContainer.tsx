import { Flex, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children?: JSX.Element[];
}

export function LeftBarContainer(props: Props) {
  const { children, ...rest } = props;
  const color = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Flex
      maxWidth={"80px"}
      height={"full"}
      p={"10px 0 10px 0"}
      borderRight={"1px"}
      borderColor={color}
      position={"fixed"}
      flexDir={"column"}
      {...rest}
    >
      {children}
    </Flex>
  );
}
