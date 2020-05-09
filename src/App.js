import React, { useState } from 'react';
import { possibleGenomes } from './utils';
import { Scenario } from './Scenario';
import { Button, FormControl, InputLabel, TextField, Select, MenuItem, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import * as data from './flowers';
import './App.css';
const useStyles = makeStyles((theme) =>


  createStyles({
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
  }))
  ;

function App() {
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');
  const [res, setRes] = useState([]);
  const [species, setSpecies] = useState('');
  const classes = useStyles();
  const flowerData = data.default.flowers;
  return (
    <>
      <div className="App">


        <form className={classes.root} noValidate autoComplete="off">
          <div>

            <Grid container alignItems="center" alignContent="center" justify="center" spacing={0}>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs>
                    <TextField label="Parent 1" value={parent1} onChange={event => setParent1(event.target.value)} helperText="e.g. 00_01_00, 010, seed red, island pink" />
                  </Grid>
                  <Grid item xs>
                    <TextField label="Parent 2" value={parent2} onChange={event => setParent2(event.target.value)} />
                  </Grid>
                  <Grid item xs>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink id="species-select-label">
                      Species
                    </InputLabel>
                    <Select
                      labelId="species-select-label"
                      id="species-select"
                      value={species}
                      onChange={event => { setSpecies(event.target.value); setRes([]); }}
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

                <Grid container justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" disabled={!species} onClick={event => { setRes(possibleGenomes(parent1, parent2, species)) }}>Calculate</Button>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </div>

        </form>

      </div>


        <Grid container className="resultsContainer" spacing={3} alignItems="center" alignContent="center" justify="center">
          <Grid item xs={10}>
            <Grid container spacing={3} alignItems="flex-start" alignContent="center" justify="center">
              {res.map(result => (
                <Grid item xs={4} key={result.parents}>
                  <Scenario key={result.parents} parents={result.parents} offspring={result.offspring} species={species} />
                </Grid>
              ))}
            </Grid>

          </Grid>
        </Grid>

    </>
  );
}

export default App;
