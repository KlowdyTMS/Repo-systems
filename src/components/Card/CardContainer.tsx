import { Card } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export function CardContainer({ children }: Props) {
  return (
    <Card maxW="full" variant={"elevated"} borderBottomRadius={"17px"}>
      {children}
    </Card>
  );
}
