import React from 'react';
import { getOffspringData, pickGenomeString } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import { Pairing } from './types';
import { Bubble } from './Bubble';

export const Scenario = ({ parents, offspring, species, genomeFormat }: Pairing) => {
  const parent1Data = getOffspringData(species, parents[0]);
  const parent2Data = getOffspringData(species, parents[1]);
  const headers=[parent1Data,parent2Data].map((parent) => {
    return {
      text: pickGenomeString(parent, genomeFormat),
      key: parent.genome,
      backgroundColor: parent.backgroundColor
    }
  })
  return (
    <Bubble
      headers={headers}
      resultsTable={<OffspringTable offspring={offspring} genomeFormat={genomeFormat} />}
    />
  )
}