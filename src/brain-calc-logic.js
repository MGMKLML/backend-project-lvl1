import _ from 'lodash';
import { startGame } from '../src/index.js';

const rule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const buildExpression = (number1, number2, operation) => `${number1} ${operation} ${number2}`;

const calcExpression = (expresion) => eval(expresion);

const setQuestion = () => {
    const number1 = _.random(1, 30);
    const number2 = _.random(1, 30);
    const operation = operations[_.random(0, 2)];
    return buildExpression(number1, number2, operation);
}

const getResult = (expression) => calcExpression(expression);

export const playBrainCalc = () => {
    startGame(rule, setQuestion, getResult);
};
