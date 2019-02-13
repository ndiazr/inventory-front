/**
 *
 * StockTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectStockTable from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import TableUI from '../../components/TableUI';

/* eslint-disable react/prefer-stateless-function */
export class StockTable extends React.Component {
  render() {
    return <TableUI columnLabels={columnLabels} />;
  }
}

const columnLabels = [
  {
    id: 1,
    content: 'product',
  },
  {
    id: 2,
    content: 'stock',
  },
];

StockTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stockTable: makeSelectStockTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'stockTable', reducer });
const withSaga = injectSaga({ key: 'stockTable', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StockTable);
