import { v4 } from "uuid";

interface ConfigSidebar {
  id: string;
  name: string;
  sigla: string;
  path: string;
}

export const configSidebar: ConfigSidebar[] = [
  {
    id: v4(),
    sigla: "S G",
    name: "Agricultura",
    path: "SMAG",
  },
  {
    id: v4(),
    sigla: "S A",
    name: "Administração",
    path: "SMAM",
  },
  {
    id: v4(),
    sigla: "S H",
    name: "Habitação",
    path: "SEHAB",
  },
];
