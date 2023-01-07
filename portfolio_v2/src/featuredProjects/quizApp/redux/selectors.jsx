// store.options.initOptions...
export const selectLoading = (store) => store.quiz.initOptions.loading;
export const selectCategory = (store) =>
  store.quiz.initOptions.question_category;
export const selectDifficulty = (store) =>
  store.quiz.initOptions.question_difficulty;
export const selectType = (store) => store.quiz.initOptions.question_type;
export const selectAmount = (store) =>
  store.quiz.initOptions.amount_of_questions;
// store.options...
export const selectQuestion = (store) => store.quiz.questions;
export const selectIndex = (store) => store.quiz.index;
export const selectScore = (store) => store.quiz.score;
export const selectAccessKey = (store) => store.quiz.accessKey;
