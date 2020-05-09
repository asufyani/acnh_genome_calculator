const memoGeneCombos = {
    '0000': ['00'],
    '0001': ['00','01'],
    '0011': ['01'],
    '0100': ['00','01'],
    '0101': ['00', '01', '01', '11'],
    '0111': ['01', '11'],
    '1100': ['01'],
    '1101': ['01', '11'],
    '1111': ['11']
  };
  
  export function possibleGenomes(parent1, parent2) {
    if (parent1 === '') {
      return parent2;
    }
    if (parent2 === '') {
      return parent1;
    }
    // Split up the parents into their possible genes
    const genomes1 = parent1.replace(/ /g, '').split(',');
    let splitGenes1 = [];
    genomes1.forEach(genome => {
      splitGenes1.push(genome.split('_'));
    });
    const genomes2 = parent2.replace(/ /g, '').split(',');
    let splitGenes2 = [];
    genomes2.forEach(genome => {
      splitGenes2.push(genome.split('_'));
    });
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
        childGenomesPerParents[genome1.join('_')+','+genome2.join('_')] = possibleChildGenomes;
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
        result.offspring.push({
          genome: dedupedGenome,
          probability:  genomeOccurrences[dedupedGenome]/genomeCount
        });
      });
      res.push(result);
    });
    console.log(res);
    return res;
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
  
  