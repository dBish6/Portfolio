import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../featuredProjects/quizApp/redux/quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
