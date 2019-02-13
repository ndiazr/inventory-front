import { fromJS } from 'immutable';
import providersPageReducer from '../reducer';

describe('providersPageReducer', () => {
  it('returns the initial state', () => {
    expect(providersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
