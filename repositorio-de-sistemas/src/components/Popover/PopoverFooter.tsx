import {
  Button,
  ButtonGroup,
  PopoverFooter as PopoverFooterChakra,
} from "@chakra-ui/react";

export function PopoverFooter() {
  return (
    <PopoverFooterChakra display="flex" justifyContent="flex-end">
      <ButtonGroup size="sm">
        <Button variant="outline">Cancel</Button>
        <Button colorScheme="red">Apply</Button>
      </ButtonGroup>
    </PopoverFooterChakra>
  );
}
