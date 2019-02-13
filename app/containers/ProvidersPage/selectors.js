import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the providersPage state domain
 */

const selectProvidersPageDomain = state =>
  state.get('providersPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProvidersPage
 */

const makeSelectProvidersPage = () =>
  createSelector(selectProvidersPageDomain, substate => substate.toJS());

export default makeSelectProvidersPage;
export { selectProvidersPageDomain };
