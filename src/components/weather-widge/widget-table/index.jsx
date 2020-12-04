import { faSortAlphaDownAlt, faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    cursor: 'pointer',
    fontSize: '20px',
    color: '#505050',
    border: '1px solid #dee2e6',
    borderBottomWidth: '2px',
    borderCollapse: 'collapse!important',
  },
  body: {
    fontSize: '16px',
    border: '1px solid #dee2e6',
    borderBottomWidth: '2px',
    borderCollapse: 'collapse!important',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function CustomizedTables(props) {
  const onSortClick = (evt) => {
    props.onSortClick(evt.currentTarget.id);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell id="parameter" onClick={onSortClick}>
              <span>Parameters</span>
              {props.sortKey === 'parameter' ? (
                <FontAwesomeIcon icon={props.sort === 'asc' ? faSortAlphaDownAlt : faSortAlphaUpAlt} />
              ) : (
                ''
              )}
            </StyledTableCell>
            <StyledTableCell id="value" onClick={onSortClick}>
              <span>Values</span>
              {props.sortKey === 'value' ? (
                <FontAwesomeIcon icon={props.sort === 'asc' ? faSortAlphaDownAlt : faSortAlphaUpAlt} />
              ) : (
                ''
              )}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataTable.map((item) => (
            <StyledTableRow key={item.parameter}>
              <StyledTableCell component="th" scope="row">
                {item.parameter}
              </StyledTableCell>
              <StyledTableCell align="right">{item.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
