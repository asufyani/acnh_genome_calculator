import React from 'react';
import { Pairing, Offspring, ProbabilityFormat, GenomeFormat } from './types';
import { bgColors, Color } from './enums';
import { OffspringTable } from './OffspringTable';
import { getOffspringData, pickGenomeString } from './flowerUtils';
import Bubble from './Bubble';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CloseIcon from '@material-ui/icons/CloseRounded';
import { Grid } from '@material-ui/core';

export const ColorBreakdown = ({ pairing, probabilityFormat, closeModal, genomeFormat }: { pairing: Pairing, probabilityFormat: ProbabilityFormat, genomeFormat: GenomeFormat, closeModal: () => void }) => {
  let colors = {} as { [key in Color]: number };
  pairing.offspring.forEach((offspring) => {
    const color = offspring.color as Color;
    colors[color] = colors[color] ? colors[color] + offspring.probability : offspring.probability;
  });
  const { parents, species } = pairing;
  const parent1Data = getOffspringData(species, parents[0]);
  const parent2Data = getOffspringData(species, parents[1]);
  const headers = [parent1Data, parent2Data].map((parent) => {
    return {
      text: pickGenomeString(parent, genomeFormat),
      key: parent.genome,
      backgroundColor: parent.backgroundColor
    }
  })

  const colorOffspring = Object.keys(colors).map((color) => {
    return {
      genome: color,
      colorDisplayString: color,
      backgroundColor: bgColors[color as Color],
      color,
      probability: colors[color as Color],
    } as Offspring;
  });

  const pieData = colorOffspring.map((offspring) => {
    return {
      name: offspring.color,
      value: offspring.probability,
      color: bgColors[offspring.color as Color],
    }
  });

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }: { [key: string]: any }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize='12px'>
        {`${(percent * 100)}%`}
      </text>
    );
  };

  return (<>
    <div className='breakdown-bubble-container'>


      <Bubble
        headers={headers}
        cornerIcon={<span onClick={closeModal} style={{ position: 'absolute', top: '-10px', right: '27px', zIndex: 3 }}>
          <CloseIcon /></span>}
        resultsTable={
          <>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className='pie-container'>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={pieData} dataKey='value' label={renderCustomizedLabel} labelLine={false}>
                        {
                          pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={pieData[index].color} />)
                        }
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <OffspringTable
                  offspring={colorOffspring}
                  showGenome={false}
                  genomeFormat={"binary"}
                  probabilityFormat={probabilityFormat}
                />
              </Grid>
            </Grid>


          </>
        }
      />
    </div>


  </>)

}