import React, { useState } from 'react';
import './App.css';
import './bubble.scss';
import Calculator from './Calculator';
import Lookup from './Lookup';
import { AppBar, Tabs, Tab, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { GenomeFormat, ProbabilityFormat, Pairing, Species, Color } from './types';
import { GenomeFormatSelector } from './GenomeFormatSelector';
import { ProbabilityFormatSelector } from './ProbabilityFormatSelector';
import * as data from './flowers';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);
  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [genomeFormat, _setGenomeFormat] = useState((localStorage.getItem('acnh_calc_genome_format') || 'binary') as GenomeFormat);
  const [probabilityFormat, _setProbabilityFormat] = useState((localStorage.getItem('acnh_calc_prob_format') || 'decimal') as ProbabilityFormat);
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');
  const [res, setRes] = useState([] as Pairing[]);
  const speciesList = Object.keys(data.default.flowers).sort();
  const [species, setSpecies] = useState(speciesList[0] as Species);
  const [color, setColor] = useState(data.default.flowers[species]['colors'][0] as Color);



  const setProbabilityFormat = (format: ProbabilityFormat): void => {
    _setProbabilityFormat(format);
    localStorage.setItem('acnh_calc_prob_format', format); 
  }

  const setGenomeFormat = (format: GenomeFormat): void => {
    _setGenomeFormat(format);
    localStorage.setItem('acnh_calc_genome_format', format);
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700" rel="stylesheet" type="text/css"></link>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Calculator" {...a11yProps(0)} />
              <Tab label="Lookup" {...a11yProps(1)} />
              <Tab label="Settings" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Calculator 
              genomeFormat={genomeFormat} 
              probabilityFormat={probabilityFormat}
              parent1={parent1}
              parent2={parent2}
              setParent1={setParent1}
              setParent2={setParent2}
              res={res}
              setRes={setRes}
              species={species}
              setSpecies={setSpecies}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Lookup 
              genomeFormat={genomeFormat} 
              species={species} 
              setSpecies={setSpecies}
              color={color}
              setColor={setColor}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
              <GenomeFormatSelector 
                genomeFormat={genomeFormat}
                setGenomeFormat={setGenomeFormat}
              />
              <ProbabilityFormatSelector
                probabilityFormat={probabilityFormat}
                setProbabilityFormat={setProbabilityFormat}
                />
          </TabPanel>
        </div>
      </ThemeProvider>


    </>
  );
}

export default App;
