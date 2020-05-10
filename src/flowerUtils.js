import * as data from './flowers';
const memoGeneCombos = {
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

const numeral_map = {
  0: '00',
  1: '01',
  2: '11'
}

const flowers = data.default.flowers;
const split_binary = /(?:[01]{2}(\S)){2,3}[01]{2}/;
const condensed = /[\d]{3,4}/;
const words = /(seed|island) (red|pink|yellow|orange|black|blue|purple|white)/i;

export function getColorData(species, genome) {
  let colorData = flowers[species]['genomes'][genome];
  let colorString = getColorString(colorData);
  colorData = {
    backgroundColor: bgColors[colorData.color],
    color: colorString,
  };
  return colorData;
}

export function getColorString(colorData) {
  let colorString = colorData.color;
  if (colorData.island) {
    colorString += " (island)";
  }
  else if (colorData.seed) {
    colorString += " (seed)";
  }
  return colorString;
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


function parseGenomeSet(genomeSet, species) {
  const genomes = genomeSet.split(',');
  let splitGenes = [];
  genomes.forEach(rawGenome => {
    const genome = rawGenome.trim();
    const split_match = split_binary.exec(genome);
    if (split_match && split_match[1]) {
      splitGenes.push(genome.split(split_match[1]));
    }
    const condensed_match = condensed.exec(genome);
    if (!split_match && condensed_match && condensed_match[0]) {
      splitGenes.push(genome.split('').map(numeral => numeral_map[numeral]));
    }
    const word_match = words.exec(genome);
    if (word_match) {
      const parts = genome.toLowerCase().split(' ');
      const variant = parts[0];
      const color = parts[1];
      const variant_genome = flowers[species][variant][color];
      splitGenes.push(variant_genome.split('_'));
    }
  });
  return splitGenes;
}

export function possibleGenomes(parent1, parent2, species) {
  if (parent1 === '') {
    return parent2;
  }
  if (parent2 === '') {
    return parent1;
  }
  // Split up the parents into their possible genes
  const splitGenes1 = parseGenomeSet(parent1, species);
  const splitGenes2 = parseGenomeSet(parent2, species);

  // Combine the possible genes of the parents
  let childGenomesPerParents = {};
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
  let res = [];
  Object.keys(childGenomesPerParents).forEach(parentCombo => {
    let result = {};
    let parents = parentCombo.split(',');
    result.parents = parents;
    result.offspring = [];
    let genomeOccurrences = {};
    let genomeCount = 0;
    childGenomesPerParents[parentCombo].forEach(childGenome => {
      genomeOccurrences[childGenome] = genomeOccurrences[childGenome] ? genomeOccurrences[childGenome] + 1 : 1;
      genomeCount++;
    });
    Object.keys(genomeOccurrences).sort().forEach(dedupedGenome => {
      const colorData = getColorData(species, dedupedGenome);
      const condensedGenome = condenseGenome(dedupedGenome);
      result.offspring.push({
        genome: dedupedGenome,
        condensedGenome,
        probability: genomeOccurrences[dedupedGenome] / genomeCount,
        species,
        ...colorData
      });
    });
    res.push(result);
  });
  return res;
}

export function condenseGenome(genome) {
  return genome.split('_').map(allele => { return allele.split('').reduce((a,b) => {return parseInt(a,2)+parseInt(b,2)})}).join('');
}

export function createPossibleGenomeList(possibilities) {
  if (possibilities.length === 1) {
    return possibilities[0]
  }
  const heads = possibilities.shift();
  const genomeTails = createPossibleGenomeList(possibilities);
  let combinedGenes = [];
  for (let i = 0; i < heads.length; i++) {
    for (let j = 0; j < genomeTails.length; j++) {
      combinedGenes.push(heads[i] + '_' + genomeTails[j]);
    }
  }
  return combinedGenes;
}

