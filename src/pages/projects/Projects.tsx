import { SimpleGrid } from "@chakra-ui/react";
import { CardProject } from "../../components/Card";
import { configProjects } from ".";

export default function Projects() {
  return (
    <SimpleGrid
      marginTop={"10px"}
      marginLeft={"10px"}
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {configProjects.map((value) => {
        return (
          <CardProject.Container key={value.id}>
            <CardProject.Header
              name={value.name}
              photo={value.photo}
              link={value.link}
            />
            <CardProject.Body text={value.text} />
            <CardProject.Footer link={value.link} version={value.version} />
          </CardProject.Container>
        );
      })}
    </SimpleGrid>
  );
}
