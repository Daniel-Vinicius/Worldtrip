interface Continent {
  id: number;
  image: string;
  name: string;
  description: string;
  slug: string;
}

export const continents: Continent[] = [
  {
    id: 1,
    name: "Europa",
    image: "/slider/europe.svg",
    description: "O continente mais antigo.",
    slug: "europe",
  },
  {
    id: 2,
    name: "América",
    image: "/slider/america.jpg",
    description: "O continente americano.",
    slug: "america",
  },
  {
    id: 3,
    name: "Antártica",
    image: "/continent/antartica.jpg",
    description: "O continente Gelado.",
    slug: "antartica",
  },
];
