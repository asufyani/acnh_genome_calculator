import React from 'react';
import { FormControl, FormLabel, Typography, Grid, Switch } from '@material-ui/core';

interface GenomeFormatSelectorProps {
  genomeFormatCondensed: boolean;
  setGenomeFormatCondensed: (arg0: boolean) => void;
}

export const GenomeFormatSelector = ({genomeFormatCondensed, setGenomeFormatCondensed} : GenomeFormatSelectorProps ) => {
  function handleSwitch(_event: React.ChangeEvent) {
    setGenomeFormatCondensed(!genomeFormatCondensed);
  };
  return (
    <>
      <FormControl>
        <FormLabel component="legend">Genome Display Format</FormLabel>

        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Binary</Grid>
            <Grid item>
              <Switch color="primary" checked={genomeFormatCondensed} onChange={handleSwitch} name="genomeFormat" />
            </Grid>
            <Grid item>Condensed</Grid>
          </Grid>
        </Typography>
      </FormControl>
    </>
  )
}