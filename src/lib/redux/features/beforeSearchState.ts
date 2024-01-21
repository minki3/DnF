import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BeforeSearchStateType {
  value: { server: string; id: string }[]
}

const initialState = {
  value: [],
} as BeforeSearchStateType

// 이전 버전의 상태를 변환하는 마이그레이션 함수
const migrationFunction = (state: BeforeSearchStateType) => {
  return { value: state }
}

export const beforeSearchState = createSlice({
  name: 'beforeSearchState',
  initialState,
  reducers: {
    saveSearch: (
      state,
      action: PayloadAction<{ server: string; id: string }>,
    ) => {
      state.value = [action.payload, ...state.value]
    },
  },
})

export const { saveSearch } = beforeSearchState.actions
export default beforeSearchState.reducer

export const migrations = {
  0: migrationFunction,
}
