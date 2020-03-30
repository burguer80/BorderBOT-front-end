import {BorderReducer, initialState} from './borders.reducer';

describe('Borders Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = BorderReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
