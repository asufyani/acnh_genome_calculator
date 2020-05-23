import React from 'react';
import { getOffspringData, pickGenomeString } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import { Pairing } from './types';
import { Bubble } from './Bubble';
import { CornerIcon } from './CornerIcon';
import PieChartIcon from '@material-ui/icons/PieChartRounded';


interface ScenarioProps {
  pairing: Pairing;
  showChart: (pairing: Pairing) => void;
}


export const Scenario = ({ pairing, showChart }: ScenarioProps) => {
  const { parents, offspring, species, genomeFormat, probabilityFormat } = pairing;
  const parent1Data = getOffspringData(species, parents[0]);
  const parent2Data = getOffspringData(species, parents[1]);
  const handleIconClick = () => {
    showChart(pairing);
  }
  const headers = [parent1Data, parent2Data].map((parent, idx) => {
    return {
      text: pickGenomeString(parent, genomeFormat),
      key: parent.genome+'-'+idx,
      backgroundColor: parent.backgroundColor
    }
  })
  return (
    <Bubble
      headers={headers}
      cornerIcon={<CornerIcon handler={handleIconClick} icon={<PieChartIcon />} />}
      resultsTable={<OffspringTable offspring={offspring} genomeFormat={genomeFormat} probabilityFormat={probabilityFormat} />}
    />
  )
}