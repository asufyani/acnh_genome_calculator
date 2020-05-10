import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel, makeStyles, createStyles, Theme, Table, TableBody, Chip, Typography } from '@material-ui/core';
import { Offspring, Order } from './types';
import { stableSort, getComparator } from './tableUtils';
type SortableKey = "genome" | "probability" | "color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offspringChip: {
      width: '100%',
      border: '1px solid black'
    },
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
            align='center'
            padding='none'
            sortDirection={orderBy === headCell.sortKey ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.sortKey}
              direction={orderBy === headCell.sortKey ? order : 'asc'}
              onClick={createSortHandler(headCell.sortKey)}
              hideSortIcon={true}
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

export interface OffspringTableProps {
  offspring: Offspring[],
  genomeFormatCondensed: boolean,
}

export const OffspringTable = ({ offspring, genomeFormatCondensed }: OffspringTableProps) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<SortableKey>('genome');
  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: SortableKey) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <Table size='small' padding='none'>
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
              <TableCell align='center'>{genomeFormatCondensed ? possibleOffspring.condensedGenome : possibleOffspring.genome}</TableCell>
              <TableCell align='center'>
                <Chip style={{ backgroundColor: possibleOffspring.backgroundColor }} className={classes.offspringChip} label={<Typography variant='subtitle2'>{possibleOffspring.color}</Typography>} />
              </TableCell>
              <TableCell align='center'>{possibleOffspring.probability * 100 + '%'}</TableCell>
            </TableRow>
          })}
      </TableBody>

    </Table>
  );
}