import BalanceBracket from './BalanceBracket';

const [, , input] = process.argv;
const isValidString = BalanceBracket(input);


// eslint-disable-next-line no-console
console.log('********************', ' RESULT ', '********************');
// eslint-disable-next-line no-console
console.log(`Is valid the string "${input}" ? Result: ${isValidString}`);
