import React, { useState } from 'react';
import './App.css';
import './bubble.scss';
import Calculator from './Calculator';
import Lookup from './Lookup';
import { AppBar, Tabs, Tab, createMuiTheme, ThemeProvider } from '@material-ui/core';

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
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Calculator />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Lookup />
          </TabPanel>
        </div>
      </ThemeProvider>


    </>
  );
}

export default App;
