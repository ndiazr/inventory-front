/**
 *
 * Layout
 *
 */

import React from 'react';

import { Grid, Col, Row } from 'react-bootstrap/lib';

import dashboardRoutes from '../../routes/dashboard';

import Header from '../Header';
import Sidebar from '../Sidebar';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Layout extends React.PureComponent {
  render() {
    return (
      <Grid>
        <Col md={4}>
          <Row>
            <Sidebar routes={dashboardRoutes} />
          </Row>
        </Col>
        <Col md={8}>
          <Row>
            <Header />
          </Row>
          <Row> {this.props.children} </Row>
        </Col>
      </Grid>
    );
  }
}

Layout.propTypes = {};

export default Layout;
