import React, {useState} from 'react';
import { Grid, TextField, Button, makeStyles, createStyles, Typography, Modal, Backdrop } from '@material-ui/core';
import { possibleGenomes } from './flowerUtils';
import { Scenario } from './Scenario';
import { Pairing, Species, GenomeFormat, ProbabilityFormat } from './types';
import { SpeciesSelect } from './SpeciesSelect';
import { ColorBreakdown } from './ColorBreakdown';


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
  setParent1: (arg0: string) => void;
  setParent2: (arg0: string) => void;
  res: Pairing[];
  setRes: (arg0: Pairing[]) => void;
  species: Species;
  setSpecies: (arg0: Species) => void;
}

export const Calculator = ({genomeFormat, probabilityFormat, parent1, parent2, setParent1, setParent2, res, setRes, species, setSpecies}: CalculatorProps) => {
  const classes = useStyles();
  const [err, setErr] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [chartPairing, setChartPairing] = useState({} as Pairing);

  const handleClose = () => {
    setShowModal(false);
  }

  const showChart = (pairing: Pairing) => {
    setChartPairing(pairing);
    setShowModal(true);
  }

  function handleSetSpecies(species:Species) {
    setRes([] as Pairing[]);
    setSpecies(species);
  }

  function handleCalculate(_event:React.MouseEvent): void {
    setErr('');
    const result = possibleGenomes(parent1, parent2, species);
    if (result.error) {
      setErr(result.error.message);
      setRes([]);
    }
    else {
      setRes(result.res);
    }
  };

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
              <Button variant="contained" color="primary" disabled={!species} onClick={handleCalculate}>Calculate</Button>
            </Grid>
          </Grid>

        </div>

      </form>



      <Grid container className="resultsContainer" alignItems="flex-start" alignContent="center" justify="center" spacing={0} >
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="flex-start" alignContent="center" justify="center">
            {err && <Typography color='error' variant='h6'>{err}</Typography>}
            {res.map(result => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={result.parents.join('x')} component="div">
                <Scenario key={result.parents.join('x')} pairing={{species, genomeFormat, probabilityFormat, ...result}} showChart={showChart}/>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>

      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div><ColorBreakdown pairing={chartPairing} probabilityFormat={probabilityFormat} genomeFormat={genomeFormat} closeModal={handleClose}/></div>
      </Modal>

    </>
  );
}

export default Calculator;