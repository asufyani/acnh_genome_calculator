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
    "Black": '#666',
    "Blue": '#36f',
    "Orange": '#F93',
    "Red": "#f33",
    "Yellow": "#ff3",
    "Purple": "#63f",
    "Green": "#9c0",
    "Pink": "#f9f",
    "White": "#fff",
}

const textColors = {
    "Black": '$fff'
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
                                <TableCell style={ { backgroundColor: bgColors[colorData.color], color: textColors[colorData.color] || 'black' } }>{getColorString(colorData)}</TableCell>
                                <TableCell>{possibleOffspring.probability*100+'%'}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                   
                </Table>
            </CardContent>
            
        </Card>
    )
}