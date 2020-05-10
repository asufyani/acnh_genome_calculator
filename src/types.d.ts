export type Offspring = {
  genome: string;
  condensedGenome: string;
  colorDisplayString: string;
  backgroundColor: string;
  color: Color;
  probability: number;
  species: Species;
}

export type Pairing = {
  parents: string[],
  offspring: Offspring[],
  species: Species,
  genomeFormat: GenomeFormat,
}

export type Order = 'asc' | 'desc';

export type Species = 'hyacinth' | 'windflower' | 'mum' | 'lily' | 'pansy' | 'rose' | 'tulip' | 'cosmos';

export type GenomeData = {
  [key: string]: {
    color: Color,
    seed?: number,
    island?: number
  }
}

export type GenomeFormat = 'binary' | 'condensed';

export type Color = 
  "black" 
  | "blue"
  | "orange"
  | "red"
  | "yellow"
  | "purple"
  | "green"
  | "pink"
  | "white";

export type VariantMap = {
  [key: string]: string;
}

type PartialOffspring = Partial<Offspring>;