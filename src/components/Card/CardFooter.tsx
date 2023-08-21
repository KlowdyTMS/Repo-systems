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
import { tokens } from "../../locales/tokens";

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
          <Tooltip label={t(tokens.nav.systemVersion)} hasArrow>
            <Text fontSize={"sm"}>{`${t(tokens.nav.version)} ${version}`}</Text>
          </Tooltip>
          <Tooltip label={t(tokens.nav.accessProject)} hasArrow>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              size="lg"
              icon={<BiLink />}
              borderRadius={"full"}
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
