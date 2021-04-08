export interface City {
  name: string;
  image: string;
  flag: string;
  city_country: string;
}

export interface Continent {
  id: number;
  name: string;
  image: string;
  short_description: string;
  long_description: string;
  slug: string;
  countries: number;
  languages: number;
  cities: City[];
}

export interface ContinentsResponse {
  continents: Continent[];
}
