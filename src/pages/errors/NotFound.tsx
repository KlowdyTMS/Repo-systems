import { Flex, Heading, Image } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"full"}
      h={"90vh"}
    >
      <Image src="/imgs/not-found.svg" w={"52"} mb={"5"}></Image>
      <Heading>404 Page Not Found</Heading>
    </Flex>
  );
}
