import React, { useState } from 'react';
import { possibleGenomes } from './utils';
import { Scenario } from './Scenario';
import { Button, GridList, GridListTile, TextField, Select, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as data from './flowers';
import './App.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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
        <TextField label="Parent 1" value={parent1} onChange={event => setParent1(event.target.value)}/>
        <TextField label="Parent 2"  value={parent2} onChange={event => setParent2(event.target.value)}/>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={species}
          onChange={event => {setSpecies(event.target.value)}}
        >
          {
            Object.keys(flowerData).map(species => {
              return <MenuItem key={species} value={species}>{species}</MenuItem>
            })
          }
        </Select>
        <Button variant="contained" color="primary" onClick={event => {setRes(possibleGenomes(parent1, parent2))}}>Calculate</Button>
      </form>
        
    </div>

    <div>
      <GridList cols={3} cellHeight='auto'>
        {res.map(result => (
          <GridListTile key={result.parents}>
             <Scenario key={result.parents} parents={result.parents} offspring={result.offspring} species={species}/>
          </GridListTile> 
        ))}
      </GridList>
        
    </div>
    </>
  );
}

export default App;
