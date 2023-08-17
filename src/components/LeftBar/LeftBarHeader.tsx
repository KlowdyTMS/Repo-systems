import { Container, ContainerProps, IconButton } from "@chakra-ui/react";
import { ReactNode } from "react";
import Logo from "/imgs/eldorado-do-sul.svg";
import { Link } from "react-router-dom";

interface IProps extends ContainerProps {
  children?: ReactNode;
}

export function LeftBarHeader(props: IProps) {
  const { children, ...rest } = props;

  return (
    <Container mb={"3.5"} {...rest}>
      <Link to={"/"}>
        <IconButton
          variant={"unstyled"}
          aria-label="logo"
          borderRadius={"full"}
          backgroundImage={`url(${Logo})`}
          backgroundSize={"20px"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
        />
      </Link>
      {children}
    </Container>
  );
}
