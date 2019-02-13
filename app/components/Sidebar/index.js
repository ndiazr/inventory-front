/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import { List, ListItem, ListItemText } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class Sidebar extends React.PureComponent {
  getItemsList(routes) {
    return routes.map(prop => (
      <NavLink to={prop.path} key={`item-${prop.id}`}>
        <ListItem>
          <ListItemText primary={prop.sidebarName} />
        </ListItem>
      </NavLink>
    ));
  }

  render() {
    return <List>{this.getItemsList(this.props.routes)}</List>;
  }
}

Sidebar.propTypes = {};

export default Sidebar;
