import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles } from '@material-ui/core';
import { Species, GenomeData, Offspring, GenomeFormat, Color } from './types';
import * as data from './flowers';
import { getOffspringData, bgColors } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import { GenomeFormatSelector } from './GenomeFormatSelector';
import { SpeciesSelect } from './SpeciesSelect';
import Bubble from './Bubble';
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
  const [genomeFormat, setGenomeFormat] = useState('binary' as GenomeFormat);

  let possibleGenomes = [] as Offspring[];
  const allGenomes = flowerData[species]['genomes'] as GenomeData;
  Object.keys(allGenomes).forEach(genome => {
    if (allGenomes[genome].color === color) {
      possibleGenomes.push(getOffspringData(species, genome))
    }
  });

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <SpeciesSelect species={species} setSpecies={setSpecies} />
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="color-select-label">
              Color
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
         <GenomeFormatSelector genomeFormat={genomeFormat} setGenomeFormat={setGenomeFormat} />
        </Grid>
      </Grid>

      <Grid container className="resultsContainer" alignItems="flex-start" alignContent="center" justify="center" spacing={0} >
        <Grid item xs={12} sm={6} md={4} xl={3} component="div">
              <Bubble
                headers={[{
                  backgroundColor: bgColors[color as Color],
                  key: 'key',
                  text: color + ' ' + species
                }]}
                resultsTable={

                  <OffspringTable offspring={possibleGenomes} genomeFormat={genomeFormat} showProbability={false} />
                }
                />

        </Grid>
      </Grid>
    </>
  )
}

export default Lookup;