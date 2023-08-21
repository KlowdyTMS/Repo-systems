import {
  IconButton,
  PlacementWithLogical,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface IProps {
  placementTooltip?: PlacementWithLogical;
  [key: string]: any;
}

export function SwitchThemeButton(props: IProps) {
  const { placementTooltip = "right", ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Tooltip label={t("nav.switchTheme")} placement={placementTooltip} hasArrow>
      <IconButton
        aria-label="darkMode"
        icon={colorMode === "dark" ? <FaMoon /> : <BsSunFill />}
        borderRadius={"full"}
        onClick={toggleColorMode}
        {...rest}
      />
    </Tooltip>
  );
}
