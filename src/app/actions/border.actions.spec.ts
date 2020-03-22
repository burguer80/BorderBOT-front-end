import * as fromBorder from './border.actions';

describe('loadBorders', () => {
  it('should return an action', () => {
    expect(fromBorder.loadBorders().type).toBe('[Border] Load Borders');
  });
});
