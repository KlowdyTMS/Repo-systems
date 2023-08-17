import { v4 } from "uuid";

interface Config {
  id: string;
  name: string;
  photo: string;
  text: string;
  version: string;
  link: string;
  secretary: string;
}

export const configProjects: Config[] = [
  {
    id: v4(),
    name: "Troca-Troca",
    photo: "/imgs/smag.png",
    text: "Automatização do fluxo de funcionamento",
    version: "2.0.1",
    link: "http://192.168.3.231:3000",
    secretary: "SMAG",
  },
];
