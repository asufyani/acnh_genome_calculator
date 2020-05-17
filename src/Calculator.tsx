import React from 'react';
import { Grid, TextField, Button, makeStyles, createStyles } from '@material-ui/core';
import { possibleGenomes } from './flowerUtils';
import { Pairing, GenomeFormat, ProbabilityFormat } from './types';
import { Species } from './enums';
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

interface CalculatorProps {
  genomeFormat: GenomeFormat;
  probabilityFormat: ProbabilityFormat;
  parent1: string;
  parent2: string;
  offspringFilter: string;
  setParent1: (arg0: string) => void;
  setParent2: (arg0: string) => void;
  setOffspringFilter: (arg0: string) => void;
  setErr: (err: string) => void;
  setRes: (arg0: Pairing[]) => void;
  species: Species;
  setSpecies: (arg0: Species) => void;
}

export const Calculator = ({ genomeFormat, probabilityFormat, parent1, parent2, offspringFilter, setParent1, setParent2, setOffspringFilter, setRes, setErr, species, setSpecies }: CalculatorProps) => {
  const classes = useStyles();

  const handleSetSpecies = React.useCallback((species: Species) => {
    setRes([] as Pairing[]);
    setSpecies(species);
  }, [setRes, setSpecies]);

  const handleCalculate = React.useCallback((_event: React.MouseEvent): void => {
    setErr('');
    const result = possibleGenomes(parent1, parent2, offspringFilter, species);
    if (result.error) {
      setErr(result.error.message);
      setRes([]);
    }
    else {
      setRes(result.res);
    }
  }, [offspringFilter, parent1, parent2, setErr, setRes, species]);

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
                <Grid item xs={12} sm={4} xl={3}>
                  <TextField label="Offspring Filter" value={offspringFilter} onChange={event => setOffspringFilter(event.target.value)} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <SpeciesSelect species={species} setSpecies={handleSetSpecies} />
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={4}>
              <Button variant="contained" color="primary" disabled={!species} onClick={handleCalculate}>Calculate</Button>
            </Grid>
          </Grid>

        </div>

      </form>

      

    </>
  );
}

export default Calculator;