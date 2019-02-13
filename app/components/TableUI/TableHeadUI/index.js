/**
 *
 * TableHead
 *
 */

import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRowUI from '../TableRowUI';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TableHeadUI extends React.PureComponent {
  render() {
    return (
      <TableHead>
        <TableRowUI cellsContent={this.props.columnLabels}/>
      </TableHead>
    );
  }
}

TableHeadUI.propTypes = {};

export default TableHeadUI;
