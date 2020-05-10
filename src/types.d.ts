export type Offspring = {
  genome: string;
  condensedGenome: string;
  backgroundColor: string;
  color: string;
  probability: number;
}

export type Pairing = {
  parents: string[],
  offspring: Offspring[],
  species: string,
  genomeFormatCondensed: boolean,
}

export type Order = 'asc' | 'desc';

export type Species = 'hyacinth' | 'windflower' | 'mum' | 'lily' | 'pansy' | 'rose' | 'tulip' | 'cosmos';

export type GenomeData = {
  [key: string]: {
    color: string,
    seed?: number,
    island?: number
  }
}