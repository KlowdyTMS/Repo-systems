import { Popover } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export function PopoverContainer({ children }: Props) {
  return (
    <Popover returnFocusOnClose={false} placement="bottom-end">
      {children}
    </Popover>
  );
}
