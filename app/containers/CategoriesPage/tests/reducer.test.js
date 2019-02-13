import { fromJS } from 'immutable';
import categoriesPageReducer from '../reducer';

describe('categoriesPageReducer', () => {
  it('returns the initial state', () => {
    expect(categoriesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
