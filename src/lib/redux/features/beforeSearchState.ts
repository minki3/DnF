import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BeforeSearchStateType {
  value: { server: string; id: string }[]
}

const initialState = {
  value: [],
} as BeforeSearchStateType

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
