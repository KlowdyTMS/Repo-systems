import { DrawerHeader } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function DrawerSecretariesHeader() {
  const { t } = useTranslation();

  return <DrawerHeader>{t("nav.secretaries")}</DrawerHeader>;
}
