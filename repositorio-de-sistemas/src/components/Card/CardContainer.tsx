import { Card } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export function CardContainer({ children }: Props) {
  return (
    <Card maxW="sm" variant={"elevated"} borderBottomRadius={"17px"}>
      {children}
    </Card>
  );
}
