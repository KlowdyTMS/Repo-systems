import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { configProjects } from ".";
import { CardProject } from "../../components/Card";
import { EmptyData } from "../../components/EmptyData/EmptyData";

export default function ProjectsBySecretary() {
  const [searchText, setSearchText] = useState("");
  const { secretary } = useParams<string>();
  const filteredConfig = configProjects.filter((value) => {
    if (secretary) {
      return (
        value.secretary.toLowerCase() === secretary.toLowerCase() &&
        value.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return value.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <Flex flexDirection={"column"} p={"10"}>
      <Box mb={"5"}>
        <Heading size={"lg"} mb={"3"}>
          Projetos - {secretary}
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input
            variant={"filled"}
            size={"md"}
            width={"auto"}
            borderRadius={"2xl"}
            placeholder="pesquisar projeto..."
            onChange={(event) => setSearchText(event.target.value)}
          />
        </InputGroup>
      </Box>
      <SimpleGrid
        flexDirection={"row"}
        marginTop={"20px"}
        spacing={5}
        templateColumns={{
          sm: "repeat(auto-fill, full)",
          md: "repeat(auto-fill, max(250px))",
        }}
      >
        {filteredConfig.map((value) => {
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
      {filteredConfig.length === 0 && <EmptyData />}
    </Flex>
  );
}
