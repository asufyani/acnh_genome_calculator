import React, { useState } from 'react';
import * as data from './flowers';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormLabel, Typography, Switch, Button, makeStyles, createStyles } from '@material-ui/core';
import { possibleGenomes } from './flowerUtils';
import { Scenario } from './Scenario';
import { Pairing } from './types';


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

export const Calculator = () => {
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');
  const [res, setRes] = useState([] as Pairing[]);
  const [species, setSpecies] = useState('');
  const [genomeFormatCondensed, setGenomeFormatCondensed] = useState(false);
  const classes = useStyles();
  const flowerData = data.default.flowers;
  function handleSwitch(event: React.ChangeEvent) {
    setGenomeFormatCondensed(!genomeFormatCondensed);
  };
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>

          <Grid container alignContent="center" justify="center" spacing={0} >
            <Grid item xs={12} md={8} lg={6} xl={4}>
              <Grid container justify="center">
                <Grid item xs={12} sm={4}>
                  <TextField label="Parent 1" value={parent1} onChange={event => setParent1(event.target.value)} helperText="e.g. 00_01_00, 010, seed red, island pink" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField label="Parent 2" value={parent2} onChange={event => setParent2(event.target.value)} />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink id="species-select-label">
                      Species
                            </InputLabel>
                    <Select
                      labelId="species-select-label"
                      id="species-select"
                      value={species}
                      onChange={(e: React.ChangeEvent<{ value: unknown }>) => setSpecies(e.target.value as string)}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {
                        Object.keys(flowerData).map(species => {
                          return <MenuItem key={species} value={species}>{species}</MenuItem>
                        })
                      }
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="primary" disabled={!species} onClick={event => { setRes(possibleGenomes(parent1, parent2, species)) }}>Calculate</Button>
            </Grid>
          </Grid>

        </div>

      </form>



      <Grid container className="resultsContainer" alignItems="flex-start" alignContent="center" justify="center" spacing={0} >
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="flex-start" alignContent="center" justify="center">
            {res.map(result => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={result.parents.join('x')} component="div">
                <Scenario key={result.parents.join('x')} parents={result.parents} offspring={result.offspring} species={species} genomeFormatCondensed={genomeFormatCondensed} />
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>

    </>
  );
}

export default Calculator;