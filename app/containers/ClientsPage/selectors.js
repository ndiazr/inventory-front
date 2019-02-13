import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the clientsPage state domain
 */

const selectClientsPageDomain = state => state.get('clientsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ClientsPage
 */

const makeSelectClientsPage = () =>
  createSelector(selectClientsPageDomain, substate => substate.toJS());

export default makeSelectClientsPage;
export { selectClientsPageDomain };
