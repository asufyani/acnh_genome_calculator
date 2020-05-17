import React from 'react';
import { FormControl, makeStyles, createStyles, InputLabel, Select, MenuItem } from '@material-ui/core';

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
interface FormatSelectorProps {
  format: string;
  formatOptions: {[key: string]: string};
  label: string;
  setFormat: (arg0: string) => void;
}

export const FormatSelector = ({format, formatOptions, label, setFormat} : FormatSelectorProps ) => {
  const classes = useStyles();
;
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="format-select-label">
          {label}
        </InputLabel>
        <Select
          labelId="format-select-label"
          value={format}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => setFormat(e.target.value as string)}
          displayEmpty
          className={classes.selectEmpty}
        >
          {Object.keys(formatOptions).map(format => <MenuItem key={format} value={format}>{format}</MenuItem>)

          }
          
        </Select>
      </FormControl>
    </>
  )
}