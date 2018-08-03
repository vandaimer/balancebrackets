import BalanceBrackets from './BalanceBrackets';

const [,,input] = process.argv;
const isValidString = BalanceBrackets(input);

console.log('********************', ' RESULT ', '********************');
console.log(`Is valid the string "${input}" ? Result: ${isValidString}`);
