import _ from 'lodash';
import { startGame } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number / 2 + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const setQuestion = () => {
  const number = _.random(2, 30);
  return { question: number.toString(), gameData: number };
};

const getResult = (number) => (isPrime(number) ? 'yes' : 'no');

export default () => {
  startGame(rule, setQuestion, getResult);
};
