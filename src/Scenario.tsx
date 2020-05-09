import React from 'react';
import { Card, CardContent, CardHeader, Typography, Chip } from '@material-ui/core';
import { getColorData } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import {Offspring} from './types';

interface ScenarioProps {
  parents: string[],
  offspring: Offspring[],
  species: string
}
export const Scenario = ({ parents, offspring, species }: ScenarioProps) => {
  const parent1ColorData = getColorData(species, parents[0]);
  const parent2ColorData = getColorData(species, parents[1]);

  return (
    <Card>
      <CardHeader
        title={<>
          <Chip style={{ backgroundColor: parent1ColorData.backgroundColor }} label={<Typography variant='subtitle1'>{parents[0]}</Typography>} />
          {" x "}
          <Chip style={{ backgroundColor: parent2ColorData.backgroundColor }} label={<Typography variant='subtitle1'>{parents[1]}</Typography>} />
        </>
        }
      />

      <CardContent>
        <OffspringTable offspring={offspring}/>
      </CardContent>

    </Card>
  )
}