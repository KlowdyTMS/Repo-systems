import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";

interface Props extends DrawerProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element[];
}

export function DrawerSecretariesContainer(props: Props) {
  const { containerRef, isOpen, onClose, children, ...rest } = props;
  // const { t } = useTranslation();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={containerRef}
      {...rest}
    >
      <DrawerOverlay />
      <DrawerContent pb={2}>
        <DrawerCloseButton />
        {children}
      </DrawerContent>
    </Drawer>
  );
}
