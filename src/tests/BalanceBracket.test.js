import BalanceBracket, {
  PARENTHESES_LEFT,
  PARENTHESES_RIGHT,
  BRACKETS_LEFT,
  BRACKETS_RIGHT,
  SQUARE_BRACKETS_LEFT,
  SQUARE_BRACKETS_RIGHT,
  simpleCheck,
  check,
} from '../BalanceBracket';

describe('BalanceBracket.balancedbrackets', () => {
  it('should return true with the follow input: (){}[]', () => {
    const result = BalanceBracket('(){}[]');
    expect(result).toBe(true);
  });

  it('should return true with the follow input: [{()}](){}', () => {
    const result = BalanceBracket('[{()}](){}');
    expect(result).toBe(true);
  });

  it('should return false with the follow input: []{()', () => {
    const result = BalanceBracket('[]{()');
    expect(result).toBe(false);
  });

  it('should return false with the follow input: [{)]', () => {
    const result = BalanceBracket('[{)]');
    expect(result).toBe(false);
  });

  it('should return false if the input is empty', () => {
    const result = BalanceBracket('');
    expect(result).toBe(false);
  });

  it('should return false if the input is undefined', () => {
    const result = BalanceBracket();
    expect(result).toBe(false);
  });
});

describe('BalanceBracket.check', () => {
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

describe('BalanceBracket.simpleCheck', () => {
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
