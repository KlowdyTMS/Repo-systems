import {
  Button,
  ButtonGroup,
  PopoverFooter as PopoverFooterChakra,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function PopoverFooter() {
  const { t } = useTranslation();

  return (
    <PopoverFooterChakra display="flex" justifyContent="flex-end">
      <ButtonGroup size="sm">
        <Button variant="outline">{t("nav.cancel")}</Button>
        <Button colorScheme="red">{t("nav.apply")}</Button>
      </ButtonGroup>
    </PopoverFooterChakra>
  );
}
