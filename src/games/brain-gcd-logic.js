import _ from 'lodash';
import { startGame } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const setQuestion = () => {
  const number1 = _.random(1, 30);
  const number2 = _.random(1, 30);
  const question = `${number1} ${number2}`;
  const gameData = { number1, number2 };
  return { question, gameData };
};

const calcGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return calcGcd(number2, number1 % number2);
};

const getResult = ({ number1, number2 }) => calcGcd(number1, number2).toString();

export default () => {
  startGame(rule, setQuestion, getResult);
};
