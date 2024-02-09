import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BeforeSearchStateType {
  value: { server?: string; id?: string }[]
}

export const initialState = {
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
      const existingItemIndex = state.value.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.server === action.payload.server,
      )
      if (existingItemIndex === -1) {
        state.value = [action.payload, ...state.value]
      }
    },
    deleteSearch: (
      state,
      action: PayloadAction<{ server?: string; id?: string }>,
    ) => {
      state.value = state.value.filter((item) => {
        return !(
          item.server === action.payload.server && item.id === action.payload.id
        )
      })
    },
  },
})

export const { saveSearch, deleteSearch } = beforeSearchState.actions
export default beforeSearchState.reducer
