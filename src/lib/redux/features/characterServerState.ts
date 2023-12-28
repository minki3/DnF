import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CharacterServerStateType {
  value: { server: string; id: string }
}

const initialState = {
  value: { server: '', id: '' },
} as CharacterServerStateType

export const characterServerState = createSlice({
  name: 'characterServerState',
  initialState,
  reducers: {
    reset: () => initialState,
    serverChange: (state, action: PayloadAction<string>) => {
      state.value.server = action.payload
    },
    idChange: (state, action: PayloadAction<string>) => {
      state.value.id = action.payload
    },
  },
})

export const { reset, serverChange, idChange } = characterServerState.actions
export default characterServerState.reducer
