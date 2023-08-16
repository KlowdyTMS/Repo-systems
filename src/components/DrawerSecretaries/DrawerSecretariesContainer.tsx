import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";

interface Props {
  ref: MutableRefObject<HTMLDivElement | null>;
  isOpen: boolean;
  onClose: () => void;
  children?: JSX.Element[];
}

export function DrawerSecretariesContainer(props: Props) {
  const { ref, isOpen, onClose, children, ...rest } = props;
  // const { t } = useTranslation();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={ref}
      {...rest}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {children}
      </DrawerContent>
    </Drawer>
  );
}
