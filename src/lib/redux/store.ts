import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import characterServerState from '@/lib/redux/features/characterServerState'
import beforeSearchState, {
  initialState,
} from '@/lib/redux/features/beforeSearchState'
import createMigrate from 'redux-persist/es/createMigrate'
import { BeforeSearchStateType } from '@/lib/redux/features/beforeSearchState'
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
import persistStore from 'redux-persist/es/persistStore'

const migrations = {
  0: (state: any) => {
    return { value: [] }
  },
  1: (state: BeforeSearchStateType) => {
    // 기존 상태를 변경하지 않고, 새로운 구조로 변환된 상태를 반환

    const transformedState = {
      value: state.value.map((item: { server?: string; id?: string }) => ({
        server: item.server,
        id: item.id,
      })),
    }
    return transformedState
  },
}

const test = {
  key: 'test',
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations as any, { debug: true }),
}

const rootReducers = combineReducers({
  serverIdSave: characterServerState,
  saveSearch: persistReducer<BeforeSearchStateType, any>(
    test,
    beforeSearchState,
  ),
})

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   version: 1,
//   blacklist: ['serverIdSave'], // storage에 저장하고 싶지 않은 state
// }

// const persistedReducer = persistReducer(rootPersistConfig, rootReducers)
export const makeStore = () => {
  return configureStore({
    reducer: rootReducers,
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
export const persistor = persistStore(makeStore())
