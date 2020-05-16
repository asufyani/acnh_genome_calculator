import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles } from '@material-ui/core';
import { Species } from './enums';

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

const speciesList = Object.keys(Species);

interface SpeciesSelectProps {
  species: Species;
  setSpecies: (species: Species) => void;
}

export const SpeciesSelect = ({ species, setSpecies }: SpeciesSelectProps) => {
  const classes = useStyles();
  return (
    <>
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
    </>
  )
}