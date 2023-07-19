import {
  Avatar,
  Box,
  CardHeader as CardHeaderChakra,
  Flex,
  Heading,
  IconButton,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { BsShareFill, BsCheck2 } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/Sl";
import { Popover } from "../Popover";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  name: string;
  photo: string;
  link: string;
}

export function CardHeader({
  name = "Pedro",
  photo = "https://bit.ly/sage-adebayo",
  link = "",
}: Props) {
  const { t } = useTranslation();
  const [isCheck, setIsCheck] = useState(false);

  const handleCopyLink = (linkToCopy: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = linkToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setIsCheck(true);

    setTimeout(() => {
      setIsCheck(false);
    }, 2000);
  };

  return (
    <CardHeaderChakra
      bgGradient="linear(to-r, red.400, blue.400)"
      marginBottom={"14"}
      height={"80px"}
      borderTopRadius={"17px"}
    >
      <Flex>
        <Flex
          flex="1"
          alignItems="center"
          flexDirection={"column"}
          flexWrap="wrap"
          position={"relative"}
          top={"6"}
          left={"5"}
        >
          <Avatar name="Segun Adebayo" src={photo} size={"lg"} />
          <Box>
            <Heading size="sm" pt={"2"}>
              {name}
            </Heading>
          </Box>
        </Flex>
        <Popover.Container>
          <Popover.Trigger>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<SlOptionsVertical />}
            />
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Header>
              <PopoverArrow />
              <PopoverCloseButton />
            </Popover.Header>
            <Popover.Body>
              <ButtonGroup gap="2" flexDirection={"column"} width={"full"}>
                <Button
                  leftIcon={isCheck ? <BsCheck2 /> : <IoCopy />}
                  marginLeft={"0 !important"}
                  onClick={() => {
                    if (link) handleCopyLink(link);
                  }}
                  variant={"outline"}
                  color={isCheck ? "green.400" : ""}
                  borderColor={isCheck ? "green.400" : ""}
                >
                  {isCheck ? t("Link copiado!") : t("Copiar link de acesso")}
                </Button>
              </ButtonGroup>
            </Popover.Body>
          </Popover.Content>
        </Popover.Container>
      </Flex>
    </CardHeaderChakra>
  );
}
