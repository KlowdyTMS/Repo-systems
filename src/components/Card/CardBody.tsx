import { CardBody as CardBodyChakra, Text } from "@chakra-ui/react";

export function CardBody({
  text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe porroeos eaque mollitia quod sint. Pariatur modi illo dicta ab nisi quoveniam? Vitae placeat, reprehenderit sit quod distinctio explicabo.",
}: {
  text: string;
}) {
  return (
    <CardBodyChakra>
      <Text>{text}</Text>
    </CardBodyChakra>
  );
}
