import _ from 'lodash';
import { startGame } from '../index.js';

const rule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const buildExpression = (number1, number2, operation) => `${number1} ${operation} ${number2}`;

const calcExpression = (gameData) => {
  const { number1, number2, operation } = gameData;
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'unknown operation';
  }
};

const setQuestion = () => {
  const number1 = _.random(1, 30);
  const number2 = _.random(1, 30);
  const operation = operations[_.random(0, 2)];
  const gameData = { number1, number2, operation };
  const question = buildExpression(number1, number2, operation);
  return { question, gameData };
};

const getResult = (gameData) => calcExpression(gameData).toString();

export default () => {
  startGame(rule, setQuestion, getResult);
};
