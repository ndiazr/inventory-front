import { fromJS } from 'immutable';
import purchasesPageReducer from '../reducer';

describe('purchasesPageReducer', () => {
  it('returns the initial state', () => {
    expect(purchasesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
