import readlineSync from 'readline-sync';

const PHRASE_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const PHRASE_WELCOME = 'Welcome to the Brain Games!';
const PHRASE_HELLO = 'Hello';
const PHRASE_TRYAGAIN = 'Let\'s try again';
const PHRASE_CONGRATS = 'Congratulations';
const PHRASE_QUESTION = 'Question';
const PHRASE_IS_WRONG_ANSWER = 'is wrong answer ;(.';
const PHRASE_CORRECT_ANSWER_WAS = 'Correct answer was';
const QUESTION_NAME = 'May I have your name? ';
const QUESTION_ANSWER = 'Your answer: ';
const ANSWER_CORRECT = 'Correct!';
const PHRASE_WHAT_IS = 'What is the result of the expression?';

const MIN = 1;
const MAX = 30;
const OPERATIONS = ['+', '-', '*'];

const sayPhrase = (phrase) => console.log(phrase);

const askQuestion = (question) => readlineSync.question(question);

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRandomOperation = () =>  OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];

const buildExpression = (number1, number2, operation) => `${number1} ${operation} ${number2}`;

const calcExpression = (expresion) => eval(expresion);

const isAnswerCorrect = (answer, result) => (answer == result);

const startBrainCalc = () => {
  sayPhrase(PHRASE_WELCOME);
  const name = askQuestion(QUESTION_NAME);
  sayPhrase(`${PHRASE_HELLO}, ${name}!`);

  sayPhrase(PHRASE_WHAT_IS);

  let round = 0;
  let shouldContinue = true;

  while (shouldContinue && round < 3) {
      const number1 = generateRandomNumber(MIN, MAX);
      const number2 = generateRandomNumber(MIN, MAX);
      const operation = generateRandomOperation();
      const expression = buildExpression(number1, number2, operation);
      const mathResult = calcExpression(expression);

      sayPhrase(`${PHRASE_QUESTION}: ${expression}`);
      const answer = askQuestion(QUESTION_ANSWER);
      
      const isCorrect = isAnswerCorrect(answer, mathResult);

      if (isCorrect) {
        sayPhrase(ANSWER_CORRECT);
        round += 1;
      } else {
        sayPhrase(`'${answer}' ${PHRASE_IS_WRONG_ANSWER} ${PHRASE_CORRECT_ANSWER_WAS} '${mathResult}'.`);
        sayPhrase(`${PHRASE_TRYAGAIN}, ${name}!`);
        shouldContinue = false;
      } 

  }

  if (round === 3) {
    sayPhrase(`${PHRASE_CONGRATS}, ${name}!`);
  }
};

export default startBrainCalc;
