import React from 'react';
import { Offspring, GenomeFormat } from './types';
import { pickGenomeString } from './flowerUtils';

interface ResultsBubbleProps {
  parent1: Offspring;
  parent2: Offspring;
  resultsTable: React.ReactElement;
  genomeFormat: GenomeFormat;
}
export const Bubble = ({ parent1, parent2, resultsTable, genomeFormat }: ResultsBubbleProps) => {

  return (
    <>
      <div className="dialogue-character-wrap">
        { [parent1, parent2].map((parent) => {
            return (
              <div className="dialogue-character" style={{ backgroundColor: parent.backgroundColor }} key={parent.genome}>
                <slot name="character">{pickGenomeString(parent, genomeFormat)}</slot>
              </div>
            )
          }) }
      </div>
      <div className="dialogue">
        <div className="dialogue-text">{resultsTable}</div>

      </div>
    </>
  );

}

export default Bubble;
