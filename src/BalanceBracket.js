export const PARENTHESES_LEFT = '(';
export const PARENTHESES_RIGHT = ')';
export const BRACKETS_LEFT = '{';
export const BRACKETS_RIGHT = '}';
export const SQUARE_BRACKETS_LEFT = '[';
export const SQUARE_BRACKETS_RIGHT = ']';

export const simpleCheck = input => {
  if (!input) return false;
  // eslint-disable-next-line no-useless-escape
  const pattern = /([\[\]\(\)\{\}])+/g;
  const match = input.match(pattern);
  if (!match) return false;
  return match[0] === input;
};

export const check = (characterLeft, characterRight, input) => {
  let counter = 0;
  const characterList = input.split('');

  for (let i = 0; i < characterList.length; i+=1) {
    const value = characterList[i];
    if (value === characterLeft) {
      counter += 1;
    } else if (value === characterRight) {
      counter -= 1;
    }
    if (counter < 0) return false;
  }

  return counter === 0;
};

const balanceBrackets = input => {
  if (!simpleCheck(input)) return false;

  const parenthere = check(PARENTHESES_LEFT, PARENTHESES_RIGHT, input);
  const bracket = check(BRACKETS_LEFT, BRACKETS_RIGHT, input);
  const squareBracket = check(SQUARE_BRACKETS_LEFT, SQUARE_BRACKETS_RIGHT, input);

  return parenthere && bracket && squareBracket;
};


export default balanceBrackets;
