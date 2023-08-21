import {
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CardSecretary } from "../../components/CardSecretary/CardSecretary";
import { DrawerSecretaries } from "../../components/DrawerSecretaries";
import { LeftBar } from "../../components/LeftBar";
import { configSidebar } from "./config";
import { useTranslation } from "react-i18next";

export function DesktopSidebar() {
  const propsContainer = {
    justifyContent: "space-between",
  };
  const { onClose, onOpen, isOpen } = useDisclosure();
  const ref = useRef(null);
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation();

  const filteredConfig = configSidebar.filter((value) =>
    value.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <LeftBar.Container {...propsContainer}>
      <div>
        <LeftBar.Header />
        <Divider orientation="horizontal" />
        <LeftBar.Main searchRef={ref} onOpen={onOpen} />
        <DrawerSecretaries.Container
          containerRef={ref}
          onClose={onClose}
          isOpen={isOpen}
        >
          <DrawerSecretaries.Header />
          <DrawerSecretaries.Main>
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <AiOutlineSearch />
              </InputLeftElement>
              <Input
                variant={"filled"}
                borderRadius={"2xl"}
                placeholder={t("nav.searchSecretary")}
                mb={4}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </InputGroup>
            {filteredConfig.map((value) => (
              <div key={value.id}>
                <CardSecretary
                  name={value.name}
                  path={value.path}
                  sigla={value.sigla}
                  onCloseDrawer={onClose}
                />
              </div>
            ))}
          </DrawerSecretaries.Main>
        </DrawerSecretaries.Container>
      </div>
      <LeftBar.Footer />
    </LeftBar.Container>
  );
}
