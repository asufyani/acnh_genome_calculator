import React from 'react';
import { Card, CardContent, CardHeader, Typography, Chip, makeStyles, createStyles } from '@material-ui/core';
import { getOffspringData, pickGenomeString } from './flowerUtils';
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
  const parent1Data = getOffspringData(species, parents[0]);
  const parent2Data = getOffspringData(species, parents[1]);
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title={<>
          <Chip style={{ backgroundColor: parent1Data.backgroundColor }} className={classes.parentChip} label={<Typography variant='subtitle1'>{pickGenomeString(parent1Data, genomeFormat)}</Typography>} />
          {" x "}
          <Chip style={{ backgroundColor: parent2Data.backgroundColor }} className={classes.parentChip} label={<Typography variant='subtitle1'>{pickGenomeString(parent2Data, genomeFormat)}</Typography>} />
        </>
        }
      />

      <CardContent>
        <OffspringTable offspring={offspring} genomeFormat={genomeFormat} />
      </CardContent>

    </Card>
  )
}