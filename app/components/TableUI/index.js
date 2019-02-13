/**
 *
 * Table
 *
 */

import React from 'react';

import Table from '@material-ui/core/Table';
import TableHeadUI from './TableHeadUI';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TableUI extends React.PureComponent {
  render() {
    return (
      <Table>
        <TableHeadUI columnLabels={this.props.columnLabels} />
      </Table>
    );
  }
}

TableUI.propTypes = {};

export default TableUI;
