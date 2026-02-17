// Cooperval - Constantes do site
// URLs de imagens e dados estáticos
import logo from '../assets/logo.png'
import logoDetec from '../assets/detec.png'
import logoNutricao from '../assets/nutricao.png'
import soucoop from '../assets/somoscoop.jpg'
import hero from '../assets/hero.webp'
import about from '../assets/about.webp'
import agro from '../assets/agro.webp'
import market from '../assets/market.webp'
import contact from '../assets/contact.webp'
import matriz from '../assets/MATRIZ.jpeg'
import erechim from '../assets/Erechim.jpeg'
import barao from '../assets/barao.jpeg'
import benjamin from '../assets/Benjamin Constant Do Sul.jpeg'
import faxinalzinho from '../assets/Faxinalzinho.jpeg'
import itatiba from '../assets/Itatiba do Sul.jpeg'

export const IMAGES = {
  logo,
  logoDetec,
  logoNutricao,
  soucoop,
  hero,
  about,
  agro,
  market,
  contact,
};

export const STORES = [
  {
    name: "Agropecuária Matriz",
    city: "Erval Grande",
    address: "Praça Ulisses Guimarães, 57, Centro",
    whatsapp: "5554999749865",
    whatsappFormatted: "(54) 99974-9865",
    description: "Centro Administrativo, Mercado, Agropecuária, Padaria e mais",
    image: matriz,
    isMain: true,
    hours: [
      { days: "Segunda à sexta", time: "08h às 12h / 13h30 às 18h" },
      { days: "Sábados", time: "08h às 12h" },
    ],
  },
  {
    name: "Agropecuária Faxinalzinho",
    city: "Faxinalzinho",
    address: "Av. Lido Armando Outramari, 586, Centro",
    whatsapp: "5554999442739",
    whatsappFormatted: "(54) 99944-2739",
    description: "Loja agropecuária completa",
    image: faxinalzinho,
    isMain: false,
    hours: [
      { days: "Segunda à sexta", time: "08h às 11h30 / 13h às 17h30" },
      { days: "Sábados", time: "08h às 11h" },
    ],
  },
  {
    name: "Agropecuária Itatiba do Sul",
    city: "Itatiba do Sul",
    address: "Av. Antonilo Angelo Tozzo, 590, Centro",
    whatsapp: "5554999531575",
    whatsappFormatted: "(54) 99953-1575",
    description: "Loja agropecuária completa",
    image: itatiba,
    isMain: false,
    hours: [
      { days: "Segunda à sexta", time: "08h às 11h30 / 13h às 17h30" },
      { days: "Sábados", time: "08h às 11h" },
    ],
  },
  {
    name: "Agropecuária Benjamin Constant",
    city: "Benjamin Constant do Sul",
    address: "Av. Ernesto Gaboardi, 920, Centro",
    whatsapp: "5554984347926",
    whatsappFormatted: "(54) 98434-7926",
    description: "Loja agropecuária e fábrica de rações",
    image: benjamin,
    isMain: false,
    hours: [
      { days: "Segunda à sexta", time: "08h às 11h30 / 13h às 17h30" },
      { days: "Sábados", time: "08h às 11h" },
    ],
  },
  {
    name: "Agropecuária Barão de Cotegipe",
    city: "Barão de Cotegipe",
    address: "Av. Vinte e Um de Abril, 62, Centro",
    whatsapp: "5554999714279",
    whatsappFormatted: "(54) 99971-4279",
    description: "Loja agropecuária completa",
    image: barao,
    isMain: false,
    hours: [
      { days: "Segunda à sexta", time: "08h às 11h30 / 13h às 17h30" },
      { days: "Sábados", time: "08h às 11h" },
    ],
  },
  {
    name: "Agropecuária Erechim",
    city: "Erechim",
    address: "Av. Caldas Junior, 567, Bairro Três Vendas",
    whatsapp: "5554991524686",
    whatsappFormatted: "(54) 99152-4686",
    description: "Loja agropecuária completa",
    image: erechim,
    isMain: false,
    hours: [
      { days: "Segunda à sexta", time: "08h às 11h30 / 13h às 17h30" },
      { days: "Sábados", time: "08h às 11h" },
    ],
  },
];

export const SERVICES = [
  {
    icon: "Factory",
    title: "Fábrica de Rações - Nutrição",
    description: "Produção própria de rações para bovinos, suínos, aves e ovinos com a marca Nutrição Cooperval. Foco principal da empresa em qualidade e nutrição animal.",
    featured: true,
  },
  {
    icon: "ShoppingCart",
    title: "Mercado",
    description: "Linha completa de produtos de mercearia, higiene e limpeza, açougue e padaria com os melhores preços.",
  },
  {
    icon: "Tractor",
    title: "Agropecuária",
    description: "Ampla variedade de medicamentos veterinários, rações, utensílios para pecuária e lavoura, hortifrutigranjeiros.",
  },
  {
    icon: "Milk",
    title: "Recebimento de Leite",
    description: "Captação e comercialização de leite in natura e prestação de serviços de resfriamento para empresas parceiras.",
  },
  {
    icon: "Wheat",
    title: "Recebimento de Cereais",
    description: "Recebimento de safras de inverno e verão com infraestrutura moderna e eficiente.",
  },
  {
    icon: "Stethoscope",
    title: "Assistência Técnica",
    description: "Serviços em clínica veterinária, assistência agrícola e nutrição animal com profissionais especializados.",
  },
];

export const COUNCILS = {
  executive: {
    title: "Diretoria Executiva",
    period: "2024-2026",
    president: "Giovani Tessaro",
    vicePresident: "Fabrício Rocco Gasparetto",
  },
  counselors: {
    title: "Conselheiros",
    members: [
      "Jaci Agustinho Auziliero",
      "Marcel Liotto",
      "Gessi Fátima Cortina Vieira Dos Santos",
      "Evandro Carlos Bertela",
      "Ivo Ostroski",
      "Dolcimar Antonio Orso",
      "Vladenice Bertotti",
      "João Batista Rubas",
      "Ari Francisco Steinke",
      "Jandir Buratti",
    ],
  },
};

export const STATS = [
  { value: "30+", label: "Anos de história" },
  { value: "50+", label: "Colaboradores" },
  { value: "9", label: "Pontos de atendimento" },
  { value: "27", label: "Municípios atendidos" },
];

export const BUSINESS_HOURS = {
  market: {
    name: "Mercado",
    hours: [
      { days: "Segunda à sexta", time: "08h às 12h / 13h30 às 19h" },
      { days: "Sábados", time: "08h às 12h / 14h às 18h" },
      { days: "Domingos", time: "08h30 às 11h30" },
    ],
  },
  agroMatrix: {
    name: "Agropecuária Matriz e Logística",
    hours: [
      { days: "Segunda à sexta", time: "08h às 12h / 13h30 às 18h" },
      { days: "Sábados", time: "08h às 12h" },
    ],
  },
  agroFilial: {
    name: "Agropecuárias Filiais",
    hours: [
      { days: "Segunda à sexta", time: "08h às 11h30 / 13h às 17h30" },
      { days: "Sábados", time: "08h às 11h" },
    ],
  },
  administrative: {
    name: "Setor Administrativo",
    hours: [
      { days: "Segunda à sexta", time: "08h às 12h / 13h30 às 18h" },
      { days: "Sábados", time: "08h às 12h" },
    ],
  },
  feedFactory: {
    name: "Fábrica de Rações",
    hours: [
      { days: "Segunda à sexta", time: "07h às 12h / 13h às 17h" },
      { days: "Sábados", time: "07h às 11h" },
    ],
  },
  milkCollection: {
    name: "Posto de Recebimento de Leite",
    hours: [
      { days: "Segunda à sexta", time: "06h às 12h / 12h às 18h" },
      { days: "Sábados e domingos", time: "06h às 16h" },
    ],
  },
  distributionCenter: {
    name: "Centro de Distribuição",
    hours: [
      { days: "Segunda à sexta", time: "08h às 12h / 13h30 às 18h" },
      { days: "Sábados", time: "08h às 12h" },
    ],
  },
};
