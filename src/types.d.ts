export type Offspring = {
  genome: string;
  alphaGenome: string;
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
  probabilityFormat: ProbabilityFormat,
}

export type Order = 'asc' | 'desc';

export type GenomeData = {
  [key: string]: {
    color: Color,
    seed?: number,
    island?: number
  }
}

export type VariantMap = {
  [key: string]: string;
}

type PartialOffspring = Partial<Offspring>;