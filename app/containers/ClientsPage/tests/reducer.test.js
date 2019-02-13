import { fromJS } from 'immutable';
import clientsPageReducer from '../reducer';

describe('clientsPageReducer', () => {
  it('returns the initial state', () => {
    expect(clientsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
