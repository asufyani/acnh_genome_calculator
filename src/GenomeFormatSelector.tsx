import React from 'react';
import { FormControl, FormLabel, Typography, Grid, Switch } from '@material-ui/core';
import { GenomeFormat } from './types';

interface GenomeFormatSelectorProps {
  genomeFormat: GenomeFormat;
  setGenomeFormat: (arg0: GenomeFormat) => void;
}

export const GenomeFormatSelector = ({genomeFormat, setGenomeFormat} : GenomeFormatSelectorProps ) => {
  function handleSwitch(_event: React.ChangeEvent) {
    setGenomeFormat(genomeFormat === 'binary' ? 'condensed' : "binary");
  };
  return (
    <>
      <FormControl>
        <FormLabel component="legend">Genome Display Format</FormLabel>

        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Binary</Grid>
            <Grid item>
              <Switch color="primary" checked={genomeFormat === 'condensed'} onChange={handleSwitch} name="genomeFormat" />
            </Grid>
            <Grid item>Condensed</Grid>
          </Grid>
        </Typography>
      </FormControl>
    </>
  )
}