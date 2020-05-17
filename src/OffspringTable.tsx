import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel, makeStyles, createStyles, Theme, Table, TableBody, Chip, Typography } from '@material-ui/core';
import { Offspring, Order, GenomeFormat, ProbabilityFormat } from './types';
import { stableSort, getComparator } from './tableUtils';
import { pickGenomeString, getProbability } from './flowerUtils';
type SortableKey = "genome" | "probability" | "colorDisplayString";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offspringChip: {
      width: '100%',
      border: '1px solid black',
      fontWeight: 'bold'
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



interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  onRequestSort: (event: React.MouseEvent<unknown>, property: SortableKey) => void;
  order: Order;
  orderBy: string;
  showProbability?: boolean;
  showGenome?: boolean;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort, showProbability = true, showGenome = true } = props;
  const createSortHandler = (property: SortableKey) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  const headCells: HeadCell[] = [
    ...(showGenome ? [{ sortKey: 'genome' as SortableKey, numeric: false, disablePadding: true, label: 'Genome' }]:[]),
    { sortKey: 'colorDisplayString', numeric: false, disablePadding: false, label: 'Color' },
    ...(showProbability ? [{ sortKey: 'probability' as SortableKey, numeric: true, disablePadding: false, label: 'Probability' }] : []),
  ];

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
  genomeFormat: GenomeFormat,
  showProbability?: boolean,
  showGenome?: boolean,
  probabilityFormat?: ProbabilityFormat,
}

export const OffspringTable = React.memo(({ offspring, genomeFormat, showProbability = true, showGenome = true, probabilityFormat='percentage' }: OffspringTableProps) => {
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
        showProbability={showProbability}
        showGenome={showGenome}
      />
      <TableBody>
        {
          stableSort(offspring, getComparator(order, orderBy)).map((possibleOffspring: Offspring) => {
            return <TableRow key={possibleOffspring.genome}>
              {showGenome && <TableCell align='center'>{pickGenomeString(possibleOffspring, genomeFormat)}</TableCell>}
              <TableCell align='center'>
                <Chip style={{ backgroundColor: possibleOffspring.backgroundColor }} className={classes.offspringChip} label={<Typography variant='subtitle2'>{possibleOffspring.colorDisplayString}</Typography>} />
              </TableCell>
              {showProbability && <TableCell align='center'>{getProbability(possibleOffspring, probabilityFormat)}</TableCell>}
            </TableRow>
          })
        }
      </TableBody>

    </Table>
  );
})