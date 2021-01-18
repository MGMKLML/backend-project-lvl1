import readlineSync from 'readline-sync';

export const phrases = {
  welcome: 'Welcome to the Brain Games!',
  hello: 'Hello',
  'try again': 'Let\'s try again',
  congrats: 'Congratulations',
  question: 'Question',
  'is wrong answer': 'is wrong answer ;(.',
  'correct answer was': 'Correct answer was',
  'may I have your name': 'May I have your name? ',
  'your answer': 'Your answer: ',
  correct: 'Correct!',
};

const sayPhrase = (phrase) => console.log(phrase);

const askQuestion = (question) => readlineSync.question(question);

const getName = () => askQuestion(phrases['may I have your name']);

const welcomeUser = (rule) => {
  sayPhrase(phrases.welcome);
  const name = getName();
  sayPhrase(`${phrases.hello}, ${name}!`);
  sayPhrase(rule);
  return name;
};

const isAnswerCorrect = (answer, result) => answer === result.toString();

export const startGame = (rule, setQuestion, getResult) => {
  const name = welcomeUser(rule);

  let correctAnswersCount = 0;
  let shouldContinue = true;

  while (shouldContinue) {
    const question = setQuestion();
    sayPhrase(`${phrases.question}: ${question}`);

    const answer = askQuestion(phrases['your answer']);
    const result = getResult(question);

    const isCorrect = isAnswerCorrect(answer, result);

    if (isCorrect) {
      correctAnswersCount += 1;
      sayPhrase(phrases.correct);
    } else {
      sayPhrase(`'${answer}' ${phrases['is wrong answer']} ${phrases['correct answer was']} '${result}'.`);
      sayPhrase(`${phrases['try again']}, ${name}!`);
      shouldContinue = false;
    }

    if (correctAnswersCount === 3) {
      shouldContinue = false;
      sayPhrase(`${phrases.congrats}, ${name}!`);
    }
  }
};
