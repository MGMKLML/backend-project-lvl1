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

const MIN = 1;
const MAX = 30;

const sayPhrase = (phrase) => console.log(phrase);

const askQuestion = (question) => readlineSync.question(question);

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (number) => (number % 2 === 0);

const getInvertedAnswer = (answer) => (answer === 'yes' ? 'no' : 'yes');

const isAnswerCorrect = (answer, number) => {
  const answerBool = answer === 'yes';
  const isNumberEven = isEven(number);
  return isNumberEven === answerBool;
};

const startBrainEvenGame = () => {
  sayPhrase(PHRASE_WELCOME);
  const name = askQuestion(QUESTION_NAME);
  sayPhrase(`${PHRASE_HELLO}, ${name}!`);

  sayPhrase(PHRASE_RULES);

  let round = 0;
  let shouldContinue = true;

  while (shouldContinue && round < 3) {
    const number = generateRandomNumber(MIN, MAX);
    sayPhrase(`${PHRASE_QUESTION}: ${number}`);
    const answer = askQuestion(QUESTION_ANSWER);
    const isCorrect = isAnswerCorrect(answer, number);

    if (isCorrect) {
      sayPhrase(ANSWER_CORRECT);
      round += 1;
    } else {
      const invertedAnswer = getInvertedAnswer(answer);
      sayPhrase(`'${answer}' ${PHRASE_IS_WRONG_ANSWER} ${PHRASE_CORRECT_ANSWER_WAS} '${invertedAnswer}'.`);
      sayPhrase(`${PHRASE_TRYAGAIN}, ${name}!`);
      shouldContinue = false;
    }
  }
  if (round === 3) {
    sayPhrase(`${PHRASE_CONGRATS}, ${name}!`);
  }
};

export default startBrainEvenGame;
