import {
  Avatar,
  Card,
  CardBody as ChakraCardBody,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { formatLimitText } from "../../utils/formatLimitText";

interface Props {
  sigla: string;
  name: string;
  path: string;
  onCloseDrawer?: () => void;
}

export function CardSecretary(props: Props) {
  const { name, path, sigla, onCloseDrawer, ...rest } = props;
  const color = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Stack spacing="4" mt={"2"}>
      <Card variant={"filled"} bgColor={color} {...rest}>
        <ChakraCardBody p={"3"}>
          <Flex
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <Avatar name={sigla} size={"md"} />
              <Text ml={"4"} fontSize={"lg"} title={name}>
                {formatLimitText(name, 14)}
              </Text>
            </Flex>
            <Link to={`secretarias/${path}`}>
              <IconButton
                variant={"ghost"}
                aria-label={`visualizar secretaria ${name}`}
                borderRadius={"full"}
                icon={<IoIosArrowForward />}
                fontSize={"1xl"}
                onClick={onCloseDrawer}
              />
            </Link>
          </Flex>
        </ChakraCardBody>
      </Card>
    </Stack>
  );
}
