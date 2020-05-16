import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles } from '@material-ui/core';
import { GenomeFormat } from './types';
import { bgColors, Species, Color } from './enums'
import * as data from './flowers';
import {  getAllOffspringForColor } from './flowerUtils';
import { OffspringTable } from './OffspringTable';
import { SpeciesSelect } from './SpeciesSelect';
import Bubble from './Bubble';
const flowerData = data.default.flowers;
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

interface LookupProps {
  genomeFormat: GenomeFormat;
  species: Species;
  setSpecies: (arg0: Species) => void;
  color: Color;
  setColor: (arg0: Color) => void;
}

export const Lookup = ({genomeFormat, species, setSpecies, color, setColor}: LookupProps) => {
  const classes = useStyles();

  const possibleGenomes = getAllOffspringForColor(species, color);

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
              onChange={(e: React.ChangeEvent<{ value: unknown }>) => setColor(e.target.value as Color)}
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