import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the purchasesPage state domain
 */

const selectPurchasesPageDomain = state =>
  state.get('purchasesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PurchasesPage
 */

const makeSelectPurchasesPage = () =>
  createSelector(selectPurchasesPageDomain, substate => substate.toJS());

export default makeSelectPurchasesPage;
export { selectPurchasesPageDomain };
