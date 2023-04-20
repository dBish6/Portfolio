import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../featuredProjects/quizApp/redux/quizSlice";
import blackjackReducer from "../featuredProjects/blackjack/redux/blackjackSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    blackjack: blackjackReducer,
  },
});

export default store;
