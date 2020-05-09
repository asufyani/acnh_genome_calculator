import React from 'react';
import { Card, CardContent, CardHeader, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import * as data from './flowers';



const flowerData = data.default.flowers;

function getColorData(possibleOffspring, species) {
   return flowerData[species]['genomes'][possibleOffspring.genome];
}

function getColorString(colorData) {
    let colorString = colorData.color;
    if (colorData.island) {
        colorString += " (island)";
    }
    else if (colorData.seed) {
        colorString += " (seed)";
    }
    return colorString;
}

const bgColors = {
    "black": '#666',
    "blue": '#36f',
    "orange": '#f93',
    "red": "#f33",
    "yellow": "#ff3",
    "purple": "#63f",
    "green": "#9c0",
    "pink": "#f9f",
    "white": "#fff",
}


export const Scenario = ({parents, offspring, species}) => {
    return (
        <Card>
            <CardHeader
                title={parents[0]  +' x '+ parents[1]}
            />
            
            <CardContent>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Genome</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Probability</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {offspring.map(possibleOffspring => {
                            const colorData = getColorData(possibleOffspring, species);
                            return <TableRow key={possibleOffspring.genome}>
                                <TableCell>{possibleOffspring.genome}</TableCell>
                                <TableCell style={ { backgroundColor: bgColors[colorData.color] } }>{getColorString(colorData)}</TableCell>
                                <TableCell>{possibleOffspring.probability*100+'%'}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                   
                </Table>
            </CardContent>
            
        </Card>
    )
}