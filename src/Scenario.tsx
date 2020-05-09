import React from 'react';
import { Card, CardContent, CardHeader, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Typography, Chip, makeStyles, Theme, createStyles } from '@material-ui/core';
import { getColorData } from './utils';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

type Offspring = {
  genome: string;
  backgroundColor: string;
  color: string;
  probability: number;
}

interface ScenarioProps {
  parents: string[],
  offspring: Offspring[],
  species: string
}

type SortableKey = "genome" | "probability" | "color";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  sortKey: SortableKey;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  { sortKey: 'genome', numeric: false, disablePadding: true, label: 'Genome' },
  { sortKey: 'color', numeric: false, disablePadding: false, label: 'Color' },
  { sortKey: 'probability', numeric: true, disablePadding: false, label: 'Probability' },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: SortableKey) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: SortableKey) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.sortKey}
            align='left'
            padding='default'
            sortDirection={orderBy === headCell.sortKey ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.sortKey}
              direction={orderBy === headCell.sortKey ? order : 'asc'}
              onClick={createSortHandler(headCell.sortKey)}
            >
              {headCell.label}
              {orderBy === headCell.sortKey ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


export const Scenario = ({ parents, offspring, species }: ScenarioProps) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<SortableKey>('genome');
  const parent1ColorData = getColorData(species, parents[0]);
  const parent2ColorData = getColorData(species, parents[1]);
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: SortableKey) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title={<>
          <Chip style={{ backgroundColor: parent1ColorData.backgroundColor }} label={<Typography variant='subtitle1'>{parents[0]}</Typography>} />
          {" x "}
          <Chip style={{ backgroundColor: parent2ColorData.backgroundColor }} label={<Typography variant='subtitle1'>{parents[1]}</Typography>} />
        </>
        }
      />

      <CardContent>
        <Table size='small'>
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {
              stableSort(offspring, getComparator(order, orderBy)).map(possibleOffspring => {
                return <TableRow key={possibleOffspring.genome}>
                  <TableCell align='left'>{possibleOffspring.genome}</TableCell>
                  <TableCell align='left' style={{ backgroundColor: possibleOffspring.backgroundColor }}>{possibleOffspring.color}</TableCell>
                  <TableCell align='left'>{possibleOffspring.probability * 100 + '%'}</TableCell>
                </TableRow>
              })}
          </TableBody>

        </Table>
      </CardContent>

    </Card>
  )
}