/**
 *
 * TableRow
 *
 */

import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TableRowUI extends React.PureComponent {
  getCells(cellsContent) {
    return cellsContent.map(cell => (
      <TableCell key={`cell-${cell.id}`}>{cell.content}</TableCell>
    ));
  }

  render() {
    return <TableRow>{this.getCells(this.props.cellsContent)}</TableRow>;
  }
}

TableRowUI.propTypes = {};

export default TableRowUI;
