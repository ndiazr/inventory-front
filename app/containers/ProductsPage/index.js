/**
 *
 * ProductsPage
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
import makeSelectProductsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Layout from '../../components/Layout';

/* eslint-disable react/prefer-stateless-function */
export class ProductsPage extends React.Component {
  render() {
    return <Layout> Products.Page </Layout>;
  }
}

ProductsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productsPage: makeSelectProductsPage(),
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

const withReducer = injectReducer({ key: 'productsPage', reducer });
const withSaga = injectSaga({ key: 'productsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductsPage);
