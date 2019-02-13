/**
 *
 * ClientsPage
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
import makeSelectClientsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Layout from '../../components/Layout';

/* eslint-disable react/prefer-stateless-function */
export class ClientsPage extends React.Component {
  render() {
    return <Layout> Clients.Page </Layout>;
  }
}

ClientsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  clientsPage: makeSelectClientsPage(),
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

const withReducer = injectReducer({ key: 'clientsPage', reducer });
const withSaga = injectSaga({ key: 'clientsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientsPage);
