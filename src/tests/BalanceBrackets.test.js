import { simpleCheck } from '../BalanceBrackets';


describe('BalanceBrackets.simpleCheck', () => {
  it('should return false if input is undefined', () => {
    const result = simpleCheck();
    expect(result).toBe(false);
  });

  it('should return false if input has any character different of [,],(,),{,}', () => {
    const result = simpleCheck('Any string without the right characters');
    expect(result).toEqual(false);
  });

  it('should return true if input has only characters like a [,],(,),{,}', () => {
    const result = simpleCheck('[)}{()');
    expect(result).toEqual(true);
  });

  it('should return true if input has mix between right characters and others', () => {
    const result = simpleCheck('[)}d{()d');
    expect(result).toEqual(false);
  });
});
