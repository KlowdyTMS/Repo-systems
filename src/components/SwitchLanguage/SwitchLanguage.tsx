import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  PlacementWithLogical,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

interface IProps {
  placementTooltip?: PlacementWithLogical;
  [key: string]: any;
}

export function SwitchLanguage(props: IProps) {
  const { placementTooltip = "right-start", ...rest } = props;
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    void i18n.changeLanguage(language);
  };

  return (
    <Box {...rest}>
      <Menu placement={placementTooltip} closeOnSelect={false}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<IoLanguage />}
          variant="solid"
          borderRadius={"full"}
        />
        <MenuList>
          <MenuOptionGroup
            defaultValue={i18n.language}
            title={t("nav.language")}
            type="radio"
          >
            <MenuItemOption
              value="ptbr"
              onClick={() => handleChangeLanguage("ptbr")}
            >
              {t("nav.portugueseBr")}
            </MenuItemOption>
            <MenuItemOption
              value="en"
              onClick={() => handleChangeLanguage("en")}
            >
              {t("nav.english")}
            </MenuItemOption>
            <MenuItemOption
              bg="rgba(0,0,0,0)"
              value="es"
              onClick={() => handleChangeLanguage("es")}
            >
              {t("nav.spanish")}
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}
