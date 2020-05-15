import React from 'react';
import PieChartIcon from '@material-ui/icons/PieChartRounded';


export const ColorChartIcon = ({showChart}: {showChart: ()=>void} ) => {
  return (
    <span onClick={showChart}  style={{position:'absolute', top: '10px', right: '27px', zIndex:3}}>
    <PieChartIcon fontSize='small' style={{position: 'absolute'}} />
    </span>
  )
}