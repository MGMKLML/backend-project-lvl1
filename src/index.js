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

export const startGame = (rule, setQuestion, getResult) => {
  const name = welcomeUser(rule);

  const maxCorrectAnswers = 3;

  for (let i = 0; i < maxCorrectAnswers; i += 1) {
    const { question, gameData } = setQuestion();
    sayPhrase(`${phrases.question}: ${question}`);

    const answer = askQuestion(phrases['your answer']);
    const result = getResult(gameData);

    if (answer !== result) {
      sayPhrase(`'${answer}' ${phrases['is wrong answer']} ${phrases['correct answer was']} '${result}'.`);
      sayPhrase(`${phrases['try again']}, ${name}!`);
      return;
    }

    sayPhrase(phrases.correct);
  }

  sayPhrase(`${phrases.congrats}, ${name}!`);
};
