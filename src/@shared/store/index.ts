import { AnyAction, CombinedState, combineReducers, configureStore, Reducer, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { TestStateType } from "@shared/types/store";

import testSlice from "./testSlice";

type RootState = {
  test: TestStateType;
};

const RootReducer = (state: RootState, action: AnyAction): CombinedState<RootState> => {
  if (action.type === "HYDRATE") return { ...state, ...action.payload };

  const combineReducer = combineReducers({
    test: testSlice.reducer, // TEST
  });

  return combineReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
  });

export default createWrapper<Store<RootState>>(makeStore, { debug: true });
