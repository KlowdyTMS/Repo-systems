import {
  CardFooter as CardFooterChakra,
  Divider,
  Flex,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BiLink } from "react-icons/Bi";
import { useTranslation } from "react-i18next";

interface Props {
  version: string;
  link: string;
}

export function CardFooter({ version = "", link = "" }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Divider color={"gray.500"} />
      <CardFooterChakra
        flexDirection={"row"}
        justify="space-between"
        flexWrap="nowrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Tooltip label="Versão do sistema" hasArrow>
            <Text fontSize={"sm"}>
              {t("versão")} {version}
            </Text>
          </Tooltip>
          <Tooltip label="Acessar Projeto" hasArrow>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              size="lg"
              icon={<BiLink />}
              onClick={() => {
                if (link.length > 0) {
                  if (!/^https?:\/\//i.test(link)) {
                    link = "http://" + link;
                  }
                  window.open(link, "_blank");
                }
              }}
            />
          </Tooltip>
        </Flex>
      </CardFooterChakra>
    </>
  );
}
