import { fromJS } from 'immutable';
import stockTableReducer from '../reducer';

describe('stockTableReducer', () => {
  it('returns the initial state', () => {
    expect(stockTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
