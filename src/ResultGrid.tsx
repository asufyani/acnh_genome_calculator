import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Scenario } from './Scenario';
import { Species } from './enums';
import { GenomeFormat, ProbabilityFormat, Pairing } from './types';

interface ResultsGridProps {
  res: Pairing[];
  err: string;
  species: Species;
  genomeFormat: GenomeFormat;
  probabilityFormat: ProbabilityFormat;
  showChart: (pairing: Pairing) => void;
}

export const ResultsGrid = React.memo( ({res, err, species, genomeFormat, probabilityFormat, showChart} : ResultsGridProps) => {
  return (
    <Grid container className="resultsContainer" alignItems="flex-start" alignContent="center" justify="center" spacing={0} >
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="flex-start" alignContent="center" justify="center">
            {err && <Typography color='error' variant='h6'>{err}</Typography>}
            {res.map(result => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={result.parents.join('x')} component="div">
                <Scenario key={result.parents.join('x')} pairing={{ species, genomeFormat, probabilityFormat, ...result }} showChart={showChart} />
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>
  )
});