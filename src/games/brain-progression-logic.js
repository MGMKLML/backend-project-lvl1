import _ from 'lodash';
import { startGame } from '../index.js';

const rule = 'FWhat number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 2;
const maxStep = 10;


const createProgression = (progressionLength) => {
    let a1 = _.random(1, 30);
    let step = _.random(minStep, maxStep);
    let arr = [a1];
    for (let i = 1; i < progressionLength; i += 1) {
        arr[i] = arr[i - 1] + step;
    };
    return arr;
}

const setQuestion = () => {
  const progressionLength = _.random(minLength, maxLength);
  const missingIndex = _.random(0, progressionLength - 1);
  const progression = createProgression(progressionLength);
  const questionArr = _.cloneDeep(progression);
  questionArr[missingIndex] = '..';
  const question = questionArr.toString().replace(/\,/g, ' ');
  const gameData = { progression, missingIndex };
  return { question, gameData };
};

const getResult = ({ progression, missingIndex }) => progression[missingIndex].toString();

export default () => {
  startGame(rule, setQuestion, getResult);
};
