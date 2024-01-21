import { configureStore, combineReducers } from '@reduxjs/toolkit'
import characterServerState from '@/lib/redux/features/characterServerState'
import beforeSearchState from '@/lib/redux/features/beforeSearchState'
import createMigrate from 'redux-persist/es/createMigrate'
import { BeforeSearchStateType } from '@/lib/redux/features/beforeSearchState'
// import { migrations } from '@/lib/redux/features/beforeSearchState'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from '@/lib/redux/customStorage'

const reducers = combineReducers({
  serverIdSave: characterServerState,
  saveSearch: beforeSearchState,
})

const migrations = {
  0: (state: BeforeSearchStateType) => {
    return state.value.map((item: { server: string; id: string }) => {
      return [...state.value, { server: item.server, id: item.id }]
    })
  },
}

const rootPersistConfig = {
  key: 'root',
  storage,
  version: 0,
  migrate: createMigrate(migrations as any, { debug: true }),

  blacklist: ['serverIdSave'], // storage에 저장하고 싶지 않은 state
}

const persistedReducer = persistReducer(rootPersistConfig, reducers)
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
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
