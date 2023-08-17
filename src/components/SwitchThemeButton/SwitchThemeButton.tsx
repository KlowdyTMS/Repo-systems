import {
  IconButton,
  PlacementWithLogical,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

interface IProps {
  placementTooltip?: PlacementWithLogical;
  [key: string]: any;
}

export function SwitchThemeButton(props: IProps) {
  const { placementTooltip = "right", ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={"Trocar tema"} placement={placementTooltip} hasArrow>
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
