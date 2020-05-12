import React from 'react';
import { getOffspringData } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import { Pairing } from './types';
import { Bubble } from './Bubble';

export const Scenario = ({ parents, offspring, species, genomeFormat }: Pairing) => {
  const parent1Data = getOffspringData(species, parents[0]);
  const parent2Data = getOffspringData(species, parents[1]);
  return (
    <Bubble
      parent1={parent1Data}
      parent2={parent2Data}
      resultsTable={<OffspringTable offspring={offspring} genomeFormat={genomeFormat} />}
      genomeFormat={genomeFormat}
    />
  )
}