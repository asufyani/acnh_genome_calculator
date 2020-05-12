import React, { useState } from 'react';
import * as data from './flowers';
import { Grid, TextField, Button, makeStyles, createStyles } from '@material-ui/core';
import { possibleGenomes } from './flowerUtils';
import { Scenario } from './Scenario';
import { Pairing, Species, GenomeFormat, ProbabilityFormat } from './types';
import { SpeciesSelect } from './SpeciesSelect';


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

export const Calculator = ({genomeFormat, probabilityFormat}: {genomeFormat: GenomeFormat, probabilityFormat: ProbabilityFormat}) => {
  const speciesList = Object.keys(data.default.flowers).sort();
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');
  const [res, setRes] = useState([] as Pairing[]);
  const [species, setSpecies] = useState(speciesList[0] as Species);
  const classes = useStyles();
  function handleSetSpecies(species:Species) {
    setRes([] as Pairing[]);
    setSpecies(species);
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>

          <Grid container alignContent="center" justify="center" spacing={0} >
            <Grid item xs={12} xl={6}>
              <Grid container justify="center">
                <Grid item xs={12} sm={4} xl={3}>
                  <TextField label="Parent 1" value={parent1} onChange={event => setParent1(event.target.value)} helperText="e.g. 00_01_00, 010, seed red, island pink" />
                </Grid>
                <Grid item xs={12} sm={4} xl={3}>
                  <TextField label="Parent 2" value={parent2} onChange={event => setParent2(event.target.value)} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <SpeciesSelect species={species} setSpecies={handleSetSpecies} />
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={4}>
              <Button variant="contained" color="primary" disabled={!species} onClick={_event => { setRes(possibleGenomes(parent1, parent2, species)) }}>Calculate</Button>
            </Grid>
          </Grid>

        </div>

      </form>



      <Grid container className="resultsContainer" alignItems="flex-start" alignContent="center" justify="center" spacing={0} >
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="flex-start" alignContent="center" justify="center">
            {res.map(result => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={result.parents.join('x')} component="div">
                <Scenario key={result.parents.join('x')} parents={result.parents} offspring={result.offspring} species={species} genomeFormat={genomeFormat} probabilityFormat={probabilityFormat} />
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>

    </>
  );
}

export default Calculator;