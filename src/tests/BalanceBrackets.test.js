import { PARENTHESES_LEFT, PARENTHESES_RIGHT, BRACKETS_LEFT, BRACKETS_RIGHT, SQUARE_BRACKETS_LEFT, SQUARE_BRACKETS_RIGHT, simpleCheck, check } from '../BalanceBrackets';


describe('BalanceBrackets.check', () => {
  it('should return false if input has only parentheses character and wrong pattern', () => {
    const result = check(PARENTHESES_LEFT, PARENTHESES_RIGHT, ')(');
    expect(result).toBe(false);
  });

  it('should return false if input has only brackets character and wrong pattern', () => {
    const result = check(BRACKETS_LEFT, BRACKETS_RIGHT, '}{');
    expect(result).toBe(false);
  });

  it('should return false if input has only square brackets character and wrong pattern', () => {
    const result = check(SQUARE_BRACKETS_LEFT, SQUARE_BRACKETS_RIGHT, '][');
    expect(result).toBe(false);
  });

  it('should return true if input is in right pattern', () => {
    const result = check(SQUARE_BRACKETS_LEFT, SQUARE_BRACKETS_RIGHT, '[]{}()');
    expect(result).toBe(true);
  });
});


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
