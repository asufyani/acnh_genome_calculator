import * as data from './flowers';
import { Species, GenomeData, Offspring, Pairing, Color, VariantMap, PartialOffspring, GenomeFormat } from './types';
const memoGeneCombos: {[key: string]: string[]} = {
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

const numeral_map: {[key: number] : string} = {
  0: '00',
  1: '01',
  2: '11'
}

const rpair = ['r', 'R'];
const ypair = ['y','Y'];
const wpair = ['W','w'];
const spair = ['s','S'];
const rys = [rpair, ypair, spair];
const ryw = [rpair,ypair,wpair];
const alphaAlleles: {[key in Species]: string[][]} = {
  rose: [ rpair, ypair, wpair, spair],
  cosmos: [rpair, ypair, spair],
  lily: rys,
  pansy:ryw,
  tulip: rys,
  hyacinth:ryw,
  mum:ryw,
  windflower:[rpair, ['o', 'O'], wpair]
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
    backgroundColor: bgColors[data.color],
    colorDisplayString: colorString,
    color: data.color,
  };
  return colorData;
}

export function getColorString({color, seed, island} : {color: Color, seed? : number, island?: number}): string {
  let colorString = color;
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
      return alphas[idx][parseInt(digit,2)]
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

const bgColors = {
  "black": '#666',
  "blue": '#36f',
  "orange": '#f93',
  "red": "#f33",
  "yellow": "#ff3",
  "purple": "#63f",
  "green": "#9c0",
  "pink": "#f9f",
  "white": "#fff",
}


function parseGenomeSet(genomeSet: string, species: Species) {
  const genomes = genomeSet.split(',');
  let splitGenes = [] as string[][];
  genomes.forEach(rawGenome => {
    const genome = rawGenome.trim();
    const split_match = split_binary.exec(genome);
    if (split_match && split_match[1]) {
      splitGenes.push(genome.split(split_match[1]));
    }
    const condensed_match = condensed.exec(genome);
    if (!split_match && condensed_match && condensed_match[0]) {
      splitGenes.push(genome.split('').map((numeral: string): string => numeral_map[parseInt(numeral,3)]));
    }
    const word_match = words.exec(genome);
    if (word_match) {
      const parts = genome.toLowerCase().split(' ');
      const variant = parts[0];
      const color = parts[1];
      const variantData: VariantMap = flowers[species][variant as 'seed'|'island'];
      const variant_genome = variantData[color];
      splitGenes.push(variant_genome.split('_'));
    }
  });
  return splitGenes;
}

export function pickGenomeString(offspring: Offspring, format: GenomeFormat): string {
  switch(format) {
    case 'binary':
      return offspring.genome;
    case 'condensed':
      return offspring.condensedGenome;
    case 'alpha':
      return offspring.alphaGenome;
    default:
      return '';

  }
}

export function possibleGenomes(parent1: string, parent2: string, species: Species): Pairing[] {
  // if (parent1 === '') {
  //   return parent2;
  // }
  // if (parent2 === '') {
  //   return parent1;
  // }
  // Split up the parents into their possible genes
  const splitGenes1 = parseGenomeSet(parent1, species);
  const splitGenes2 = parseGenomeSet(parent2, species);

  // Combine the possible genes of the parents
  let childGenomesPerParents: {[key: string]: string[]} = {};
  splitGenes1.forEach(genome1 => {
    splitGenes2.forEach(genome2 => {
      let allelesForEachGene = [];
      for (let i = 0; i < genome1.length; i++) {
        const geneCombo = genome1[i] + genome2[i];
        allelesForEachGene.push(memoGeneCombos[geneCombo]);
      }
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
    let genomeOccurrences: {[key: string]: number} = {};
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
  return res;
}

export function getCondensedGenome(genome: string): string {
  return genome.split('_').map(allele => { return allele.split('').reduce((a: string, b: string) => { return (parseInt(a, 2) + parseInt(b, 2)).toString() }) }).join('');
}

export function createPossibleGenomeList(possibilities: string[][]): string[] {
  if (possibilities.length === 1) {
    return possibilities[0]
  }
  const heads = possibilities.shift();
  const genomeTails = createPossibleGenomeList(possibilities);
  let combinedGenes = [];
  for (let i = 0; i < heads!.length; i++) {
    for (let j = 0; j < genomeTails.length; j++) {
      combinedGenes.push(heads![i] + '_' + genomeTails[j]);
    }
  }
  return combinedGenes;
}

