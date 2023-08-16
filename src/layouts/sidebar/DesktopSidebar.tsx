import { Divider, Input, useDisclosure } from "@chakra-ui/react";
import { LeftBar } from "../../components/LeftBar";
import { DrawerSecretaries } from "../../components/DrawerSecretaries";
import { useRef } from "react";
import { CardSecretary } from "../../components/CardSecretary/CardSecretary";
import { configSidebar } from "./config";

export function DesktopSidebar() {
  const propsContainer = {
    justifyContent: "space-between",
  };
  const { onClose, onOpen, isOpen } = useDisclosure();
  const ref = useRef(null);

  return (
    <LeftBar.Container {...propsContainer}>
      <div>
        <LeftBar.Header />
        <Divider orientation="horizontal" />
        <LeftBar.Main searchRef={ref} onOpen={onOpen} />
        <DrawerSecretaries.Container
          ref={ref}
          onClose={onClose}
          isOpen={isOpen}
        >
          <DrawerSecretaries.Header />
          <DrawerSecretaries.Main>
            <Input placeholder="Pesquisar secretaria..." mb={4} />
            {configSidebar.map((value) => (
              <div key={value.id}>
                <CardSecretary
                  name={value.name}
                  path={value.path}
                  sigla={value.sigla}
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
