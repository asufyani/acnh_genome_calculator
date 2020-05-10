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