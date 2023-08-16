import { DrawerBody } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export function DrawerSecretariesMain(props: Props) {
  const { children, ...rest } = props;

  return <DrawerBody {...rest}>{children}</DrawerBody>;
}
