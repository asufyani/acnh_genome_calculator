import React from 'react';
import { FormControl, makeStyles, createStyles, InputLabel, Select, MenuItem } from '@material-ui/core';
import { GenomeFormat } from './types';


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
interface GenomeFormatSelectorProps {
  genomeFormat: GenomeFormat;
  setGenomeFormat: (arg0: GenomeFormat) => void;
}

export const GenomeFormatSelector = ({genomeFormat, setGenomeFormat} : GenomeFormatSelectorProps ) => {
  const classes = useStyles();
;
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="format-select-label">
          Display Format
        </InputLabel>
        <Select
          labelId="species-select-label"
          id="species-select"
          value={genomeFormat}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => setGenomeFormat(e.target.value as GenomeFormat)}
          displayEmpty
          className={classes.selectEmpty}
        >
          {['binary', 'condensed'].map(format => <MenuItem key={format} value={format}>{format}</MenuItem>)

          }
          
        </Select>
      </FormControl>
    </>
  )
}