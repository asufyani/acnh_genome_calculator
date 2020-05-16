import * as data from './flowers';
import { GenomeData, Offspring, Pairing, VariantMap, PartialOffspring, GenomeFormat, ProbabilityFormat } from './types';
import { Species, Color, bgColors } from './enums';
const memoGeneCombos: { [key: string]: string[] } = {
  '0000': ['00'],
  '0001': ['00', '01'],
  '0011': ['01'],
  '0100': ['00', '01'],
  '0101': ['00', '01', '01', '11'],
  '0111': ['01', '11'],
  '1100': ['01'],
  '1101': ['01', '11'],
  '1111': ['11']
};

const numeral_map: { [key: number]: string } = {
  0: '00',
  1: '01',
  2: '11'
}

const rpair = ['r', 'R'];
const ypair = ['y', 'Y'];
const wpair = ['W', 'w'];
const spair = ['s', 'S'];
const rys = [rpair, ypair, spair];
const ryw = [rpair, ypair, wpair];
const alphaAlleles: { [key in Species]: string[][] } = {
  rose: [rpair, ypair, wpair, spair],
  cosmos: [rpair, ypair, spair],
  lily: rys,
  pansy: ryw,
  tulip: rys,
  hyacinth: ryw,
  mum: ryw,
  windflower: [rpair, ['o', 'O'], wpair]
}

const flowers = data.default.flowers;
const split_binary = /(?:[01]{2}(\S)){2,3}[01]{2}/;
const condensed = /[\d]{3,4}/;
const words = /(seed|island) (red|pink|yellow|orange|black|blue|purple|white)/i;

export function getColorData(species: Species, genome: string): PartialOffspring {
  const genomeData: GenomeData = flowers[species]['genomes'] as GenomeData;
  const data = genomeData[genome];
  const colorString = getColorString(data);
  const colorData = {
    species,
    genome,
    backgroundColor: bgColors[data.color as Color],
    colorDisplayString: colorString,
    color: data.color,
  };
  return colorData;
}

export function getColorString({ color, seed, island }: { color: Color, seed?: number, island?: number }): string {
  let colorString = color as string;
  if (island) {
    colorString += " (island)";
  }
  else if (seed) {
    colorString += " (seed)";
  }
  return colorString;
}

export function getAlphaGenome(species: Species, genome: string): string {
  const pairs = genome.split('_');
  const alphas = alphaAlleles[species];
  return pairs.map((pair, idx) => {
    return pair.split('').map(digit => {
      return alphas[idx][parseInt(digit, 2)]
    }).sort().join('');
  }).join('-');

}

export function getOffspringData(species: Species, genome: string): Offspring {
  const colorData = getColorData(species, genome);
  const condensedGenome = getCondensedGenome(genome);
  const alphaGenome = getAlphaGenome(species, genome);
  return {
    genome,
    alphaGenome,
    condensedGenome,
    species,
    ...colorData
  } as Offspring;
}

export function getAllOffspringForColor(species: Species, color: Color) {
  let possibleGenomes = [] as Offspring[];
  const allGenomes = flowers[species]['genomes'] as GenomeData;
  Object.keys(allGenomes).forEach(genome => {
    if (allGenomes[genome].color === color) {
      possibleGenomes.push(getOffspringData(species, genome))
    }
  });
  return possibleGenomes;
}


function parseGenomeSet(genomeSet: string, species: Species) {
  const genomes = genomeSet.split(',');
  let splitGenes = [] as string[][];
  genomes.forEach(rawGenome => {
    const genome = rawGenome.trim();
    let gene = [] as string[];
    let matched = 0;
    if (genome in Color) {
      matched = 1;
      const possibleGenomes = getAllOffspringForColor(species, genome as Color);
      possibleGenomes.forEach((offspring) => {
        gene = offspring.genome.split('_');
        splitGenes.push(gene);
      })
    }
    if (!matched) {
      const split_match = split_binary.exec(genome);
      if (split_match && split_match[1]) {
        matched = 1;
        gene = genome.split(split_match[1]);
        splitGenes.push(gene);
      }
    }

    if (!matched) {
      const condensed_match = condensed.exec(genome);
      if (condensed_match && condensed_match[0]) {
        matched = 1;
        gene = genome.split('').map((numeral: string): string => numeral_map[parseInt(numeral, 3)])
        splitGenes.push(gene);
      }
    }
    if (!matched) {
      const word_match = words.exec(genome);
      if (word_match) {
        const parts = genome.toLowerCase().split(' ');
        const variant = parts[0];
        const color = parts[1];
        const variantData: VariantMap = flowers[species][variant as 'seed' | 'island'];
        const variant_genome = variantData[color];
        gene = variant_genome.split('_')
        splitGenes.push(gene);
      }
    }

    if (!checkGene(gene, species)) {
      throw new Error(`Could not parse parent ${rawGenome} for species ${species}`);
    }
  });
  return splitGenes;
}

function checkGene(gene: string[], species: Species) {
  return gene.length === alphaAlleles[species].length;
}

export function pickGenomeString(offspring: PartialOffspring, format: GenomeFormat): string {
  switch (format) {
    case 'binary':
      return offspring.genome!;
    case 'condensed':
      return offspring.condensedGenome!;
    case 'alpha':
      return offspring.alphaGenome!;
    default:
      return '';

  }
}



export function possibleGenomes(parent1: string, parent2: string, species: Species): { res: Pairing[], error?: Error } {
  // if (parent1 === '') {
  //   return parent2;
  // }
  // if (parent2 === '') {
  //   return parent1;
  // }
  // Split up the parents into their possible genes
  try {
    const splitGenes1 = parseGenomeSet(parent1, species);
    const splitGenes2 = parseGenomeSet(parent2, species);


    // Combine the possible genes of the parents
    let childGenomesPerParents: { [key: string]: string[] } = {};
    splitGenes1.forEach(genome1 => {
      splitGenes2.forEach(genome2 => {
        if (childGenomesPerParents[genome1.join('_') + ',' + genome2.join('_')]
        || childGenomesPerParents[genome2.join('_') + ',' + genome1.join('_')]) {
          return;
        }
        let allelesForEachGene = [] as string[][];
        genome1.forEach((_item, i) => {
          const geneCombo = genome1[i] + genome2[i];
          allelesForEachGene.push(memoGeneCombos[geneCombo]);
        })

        let possibleChildGenomes = createPossibleGenomeList(allelesForEachGene);
        childGenomesPerParents[genome1.join('_') + ',' + genome2.join('_')] = possibleChildGenomes;
      })
    });
    // Massage the data to be displayed in the sheet.
    let res = [] as Pairing[];
    Object.keys(childGenomesPerParents).forEach(parentCombo => {
      let result = {} as Pairing;
      let parents = parentCombo.split(',');
      result.parents = parents;
      result.offspring = [];
      let genomeOccurrences: { [key: string]: number } = {};
      let genomeCount = 0;
      childGenomesPerParents[parentCombo].forEach(childGenome => {
        genomeOccurrences[childGenome] = genomeOccurrences[childGenome] ? genomeOccurrences[childGenome] + 1 : 1;
        genomeCount++;
      });
      Object.keys(genomeOccurrences).sort().forEach(dedupedGenome => {
        const offspringData = getOffspringData(species, dedupedGenome)
        result.offspring.push({
          probability: genomeOccurrences[dedupedGenome] / genomeCount,
          ...offspringData
        });
      });
      res.push(result);
    });
    return { res };
  } catch (e) {
    return {
      res: [],
      error: e
    }
  }
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export function getProbability({ probability }: Offspring, format: ProbabilityFormat) {
  if (format === 'percentage') {
    return (probability * 100) + '%';
  }
  else {
    const divisor = gcd(probability * 256, 256);
    const denominator = 256 / divisor;
    return probability * denominator + ':' + denominator;
  }
}

export function getCondensedGenome(genome: string): string {
  return genome.split('_').map(allele => { return allele.split('').reduce((a: string, b: string) => { return (parseInt(a, 2) + parseInt(b, 2)).toString() }) }).join('');
}

 function createPossibleGenomeList(possibilities: string[][]): string[] {
  if (possibilities.length === 1) {
    return possibilities[0]
  }
  const heads = possibilities.shift();
  const genomeTails = createPossibleGenomeList(possibilities);
  let combinedGenes = [] as string[];
  heads?.forEach(head=> {
    genomeTails.forEach(tail => {
      combinedGenes.push(head+'_'+tail);
    })
  })
  
  return combinedGenes;
}

