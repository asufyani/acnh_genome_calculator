import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles } from '@material-ui/core';
import { Species, GenomeData, Offspring } from './types';
import * as data from './flowers';
import { getOffspringData } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import { GenomeFormatSelector } from './GenomeFormatSelector';
const flowerData = data.default.flowers;
const speciesList = Object.keys(flowerData).sort();
const useStyles = makeStyles((theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const Lookup = () => {
  const classes = useStyles();
  const [species, setSpecies] = useState(speciesList[0] as Species);
  const [color, setColor] = useState(flowerData[species]['colors'][0] as string);
  const [genomeFormatCondensed, setGenomeFormatCondensed] = useState(false);

  let possibleGenomes = [] as Offspring[];
  const allGenomes: GenomeData = flowerData[species]['genomes'];
  Object.keys(allGenomes).forEach(genome => {
    if (allGenomes[genome].color === color) {
      possibleGenomes.push(getOffspringData(species, genome))
    }
  });

  return (
    <>
      <Grid container>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="species-select-label">
              Species
            </InputLabel>
            <Select
              labelId="species-select-label"
              id="species-select"
              value={species}
              onChange={(e: React.ChangeEvent<{ value: unknown }>) => setSpecies(e.target.value as Species)}
              displayEmpty
              className={classes.selectEmpty}
            >
              {
                speciesList.sort().map(species => {
                  return <MenuItem key={species} value={species}>{species}</MenuItem>
                })
              }
            </Select>
          </FormControl>

        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="color-select-label">
              color
            </InputLabel>
            <Select
              labelId="color-select-label"
              id="color-select"
              value={color}
              onChange={(e: React.ChangeEvent<{ value: unknown }>) => setColor(e.target.value as string)}
              displayEmpty
              className={classes.selectEmpty}
            >
              {species &&
                flowerData[species]['colors'].map(color => {
                  return <MenuItem key={color} value={color}>{color}</MenuItem>
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
         <GenomeFormatSelector genomeFormatCondensed={genomeFormatCondensed} setGenomeFormatCondensed={setGenomeFormatCondensed} />
        </Grid>
      </Grid>

      <Grid container className="resultsContainer" alignItems="flex-start" alignContent="center" justify="center" spacing={0} >
        <Grid item xs={12} sm={6} md={4} xl={3} component="div">
          <OffspringTable offspring={possibleGenomes} genomeFormatCondensed={genomeFormatCondensed} showProbability={false} />
        </Grid>
      </Grid>
    </>
  )
}

export default Lookup;