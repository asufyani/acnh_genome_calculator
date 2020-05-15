import React from 'react';
import { Pairing, Color, Offspring, ProbabilityFormat } from './types';
import { OffspringTable } from './OffspringTable';
import { bgColors } from './flowerUtils';
import Bubble from './Bubble';

export const ColorBreakdown = ({pairing, probabilityFormat} : {pairing: Pairing, probabilityFormat: ProbabilityFormat}) => {
  let colors = {} as {[key in Color]: number};
  pairing.offspring.forEach((offspring) => {
    colors[offspring.color] = colors[offspring.color] ? colors[offspring.color]+offspring.probability : offspring.probability;
  });
  const colorOffspring = Object.keys(colors).map((color) => {
    return {
      genome: color,
      colorDisplayString: color,
      backgroundColor: bgColors[color as Color],
      color,
      probability: colors[color as Color],
    } as Offspring;
  });
  return (<>
  <Bubble
      headers={[]}
      resultsTable={
        <OffspringTable
          offspring={colorOffspring}
          showGenome={false}
          genomeFormat={"binary"}
          probabilityFormat={probabilityFormat}
        /> 
      }
    />

    
  </>)

}