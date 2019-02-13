/**
 *
 * StockPage
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
import makeSelectStockPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Layout from '../../components/Layout';
import StockTable from '../StockTable';

/* eslint-disable react/prefer-stateless-function */
export class StockPage extends React.Component {
  render() {
    return (
      <Layout>
        <StockTable />
      </Layout>
    );
  }
}

StockPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stockPage: makeSelectStockPage(),
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

const withReducer = injectReducer({ key: 'stockPage', reducer });
const withSaga = injectSaga({ key: 'stockPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StockPage);
