import React from 'react';
import { FormControl, makeStyles, createStyles, InputLabel, Select, MenuItem } from '@material-ui/core';
import { ProbabilityFormat } from './types';


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
interface ProbabilityFormatSelectorProps {
  probabilityFormat: ProbabilityFormat;
  setProbabilityFormat: (arg0: ProbabilityFormat) => void;
}

export const ProbabilityFormatSelector = ({probabilityFormat, setProbabilityFormat} : ProbabilityFormatSelectorProps ) => {
  const classes = useStyles();
;
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="format-select-label">
          Probability Display
        </InputLabel>
        <Select
          labelId="species-select-label"
          id="species-select"
          value={probabilityFormat}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => setProbabilityFormat(e.target.value as ProbabilityFormat)}
          displayEmpty
          className={classes.selectEmpty}
        >
          {['percentage', 'fraction'].map(format => <MenuItem key={format} value={format}>{format}</MenuItem>)

          }
          
        </Select>
      </FormControl>
    </>
  )
}