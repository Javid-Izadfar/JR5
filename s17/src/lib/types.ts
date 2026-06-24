export type Country = {
  name: string;
  capital: string;
  region: string;
  population: number;
  area: number;
  flags: {
    svg: string;
    png: string;
  };
  languages: Record<string, string>[];
  currencies: Record<string, string>[];
  borders: string[];
  alpha3Code: string;
  nativeName: string;
  demonym: string;
  timezones: string[];
  subregion: string;
};
