import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TestStateType } from "@shared/types/store";

// initalState 생성
const initialState: TestStateType = { value: 0 };

// 슬라이스생성
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭> 으로 정의해준다.
    testReducer: (state: TestStateType, action: PayloadAction<number>) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
      state.value += action.payload;
    },
  },
});

// 액션을 export 해준다.
export const { testReducer } = testSlice.actions;

// 슬라이스를 export 해준다.
export default testSlice;
