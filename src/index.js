import BalanceBracket from './BalanceBracket';

const [, , input] = process.argv;
const isValidString = BalanceBracket(input);

console.log('********************', ' RESULT ', '********************');
console.log(`Is valid the string "${input}" ? Result: ${isValidString}`);
