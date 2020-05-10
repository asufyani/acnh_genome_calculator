import React from 'react';
import { Card, CardContent, CardHeader, Typography, Chip, makeStyles, createStyles } from '@material-ui/core';
import { getColorData, condenseGenome } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import { Pairing } from './types';

const useStyles = makeStyles(() =>
  createStyles({
    parentChip: {
      border: '1px solid black'
    },
  }),
);

export const Scenario = ({ parents, offspring, species, genomeFormat }: Pairing) => {
  const parent1ColorData = getColorData(species, parents[0]);
  const parent2ColorData = getColorData(species, parents[1]);
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title={<>
          <Chip style={{ backgroundColor: parent1ColorData.backgroundColor }} className={classes.parentChip} label={<Typography variant='subtitle1'>{genomeFormat === 'condensed' ? condenseGenome(parents[0]) : parents[0]}</Typography>} />
          {" x "}
          <Chip style={{ backgroundColor: parent2ColorData.backgroundColor }} className={classes.parentChip} label={<Typography variant='subtitle1'>{genomeFormat === 'condensed' ? condenseGenome(parents[1]) : parents[1]}</Typography>} />
        </>
        }
      />

      <CardContent>
        <OffspringTable offspring={offspring} genomeFormat={genomeFormat} />
      </CardContent>

    </Card>
  )
}