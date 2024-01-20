import { configureStore, combineReducers } from '@reduxjs/toolkit'
import characterServerState from '@/lib/redux/features/characterServerState'
import beforeSearchState from '@/lib/redux/features/beforeSearchState'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from '@/lib/redux/features/customStorage'
const reducers = combineReducers({
  saveSearch: beforeSearchState,
})

const presistConfig = {
  key: 'root',
  storage,
}

const presistedReducer = persistReducer(presistConfig, reducers)

const rootReducer = combineReducers({
  serverSave: persistReducer(presistConfig, characterServerState),
  beforeSave: persistReducer(presistConfig, beforeSearchState),
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
