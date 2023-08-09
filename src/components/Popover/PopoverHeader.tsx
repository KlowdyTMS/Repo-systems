import { PopoverHeader as PopoverHeaderChakra } from "@chakra-ui/react";

export function PopoverHeader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PopoverHeaderChakra fontWeight="semibold" minHeight={"35px"}>
        {children}
      </PopoverHeaderChakra>
    </>
  );
}
