import _ from 'lodash';
import { startGame } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const setQuestion = () => {
  const number = _.random(1, 30);
  return number.toString();
};

const getResult = (number) => (isEven(number) ? 'yes' : 'no');

export default () => {
  startGame(rule, setQuestion, getResult);
};
