const PARENTHESES_LEFT = '(';
const PARENTHESES_RIGHT = ')';
const BRACKETS_LEFT = '{';
const BRACKETS_RIGHT = '}';
const SQUARE_BRACKETS_LEFT = '{';
const SQUARE_BRACKETS_RIGHT = '}';


const balanceBrackets = input => {
  if(!simpleCheck(input)) return false;

  const parenthere = check(PARENTHESES_LEFT, PARENTHESES_RIGHT, input);
  const bracket = check(BRACKETS_LEFT, BRACKETS_RIGHT, input);
  const squareBracket = check(SQUARE_BRACKETS_LEFT, SQUARE_BRACKETS_RIGHT, input);

  return parenthere && bracket && squareBracket;
};

export const check = (characterLeft, characterRight, input) => {
  let counter = 0;
  const characterList = input.split('');

  for(let i=0; i<characterList.length; i++) {
		const value = characterList[i];
    if(value == characterLeft) {
      counter++;
    } else if (value == characterRight) {
      counter--;
    }
    if(counter < 0) return false;
  }

  return counter == 0;
};

const simpleCheck = input => {
 if(!input) return false;
 const pattern = /([\[\]\(\)\{\}])+/g;
 return Boolean(input.match(pattern));
}

export default balanceBrackets;
