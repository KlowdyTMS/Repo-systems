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
    sigla: "Secretária Fazenda",
    name: "Fazenda",
    path: "SEFAZ",
  },
  {
    id: v4(),
    sigla: "Secretária G",
    name: "Agricultura",
    path: "SMAG",
  },
  {
    id: v4(),
    sigla: "Secretária Administração",
    name: "Administração",
    path: "SMAD",
  },
  {
    id: v4(),
    sigla: "Secretaria de Habitação",
    name: "Habitação",
    path: "SEHAB",
  },
  {
    id: v4(),
    sigla: "Secretaria Planejamento",
    name: "Planejamento",
    path: "SEPLAN",
  },
  {
    id: v4(),
    sigla: "Secretaria Integração",
    name: "Integração Urbana e Rural",
    path: "SINTEG",
  },
  {
    id: v4(),
    sigla: "Secretaria Meio Ambiente",
    name: "Meio Ambiente",
    path: "SMAM",
  },
  {
    id: v4(),
    sigla: "Secretaria Assistência",
    name: "Assistência Social e Trabalho",
    path: "SMAST",
  },
  {
    id: v4(),
    sigla: "Secretaria Educação",
    name: "Educação, Cultura, Desporto, Lazer e Turismo",
    path: "SMEC",
  },
  {
    id: v4(),
    sigla: "Secretaria Obras",
    name: "Obras e Viação",
    path: "SMOV",
  },
  {
    id: v4(),
    sigla: "Secretaria Saúde",
    name: "Saúde",
    path: "SMS",
  },
  {
    id: v4(),
    sigla: "Secretaria Transporte",
    name: "Transporte Trânsito e Iluminação Pública",
    path: "SMTTI",
  },
];
