import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stockTable state domain
 */

const selectStockTableDomain = state => state.get('stockTable', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by StockTable
 */

const makeSelectStockTable = () =>
  createSelector(selectStockTableDomain, substate => substate.toJS());

export default makeSelectStockTable;
export { selectStockTableDomain };
