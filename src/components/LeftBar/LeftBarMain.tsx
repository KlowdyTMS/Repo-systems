import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  searchRef: MutableRefObject<null>;
  onOpen: () => void;
}

export function LeftBarMain(props: Props) {
  const { searchRef, onOpen, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      mt={"3.5"}
      mb={"3.5"}
      {...rest}
    >
      <Tooltip label="Pesquisar secretaria" placement="right" hasArrow>
        <IconButton
          ref={searchRef}
          aria-label="button"
          borderRadius={"full"}
          fontSize={"larger"}
          icon={<AiOutlineSearch />}
          onClick={onOpen}
        />
      </Tooltip>
    </Flex>
  );
}
