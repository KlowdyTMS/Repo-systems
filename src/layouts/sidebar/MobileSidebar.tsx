import {
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { LeftBar } from "../../components/LeftBar";
import { TopBar } from "../../components/TopBar/indext";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef, useState } from "react";
import { SwitchThemeButton } from "../../components/SwitchThemeButton/SwitchThemeButton";
import { DrawerSecretaries } from "../../components/DrawerSecretaries";
import { configSidebar } from "./config";
import { CardSecretary } from "../../components/CardSecretary/CardSecretary";

export function MobileSidebar() {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const ref = useRef(null);
  const [searchText, setSearchText] = useState("");

  const filteredConfig = configSidebar.filter((value) =>
    value.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <TopBar.Container>
      <LeftBar.Header m={"0"} p={"0"} w={"auto"} />
      <InputGroup mr={3} ml={3} ref={ref} onClick={onOpen}>
        <InputLeftElement pointerEvents={"none"}>
          <AiOutlineSearch />
        </InputLeftElement>
        <Input
          variant={"filled"}
          borderRadius={"2xl"}
          placeholder="Pesquisar secretaria..."
          w={"full"}
        />
      </InputGroup>
      <SwitchThemeButton />
      <DrawerSecretaries.Container
        containerRef={ref}
        onClose={onClose}
        isOpen={isOpen}
        placement="top"
        size={"full"}
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
              placeholder="Pesquisar secretaria..."
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
    </TopBar.Container>
  );
}
