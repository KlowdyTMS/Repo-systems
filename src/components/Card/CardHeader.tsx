import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CardHeader as CardHeaderChakra,
  Flex,
  Heading,
  IconButton,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { BsCheck2 } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";
import { Popover } from "../Popover";
import { useTranslation } from "react-i18next";
import { tokens } from "../../locales/tokens";

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
              borderRadius={"full"}
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
                  {isCheck ? t(tokens.nav.copiedLink) : t(tokens.nav.copyLink)}
                </Button>
              </ButtonGroup>
            </Popover.Body>
          </Popover.Content>
        </Popover.Container>
      </Flex>
    </CardHeaderChakra>
  );
}
