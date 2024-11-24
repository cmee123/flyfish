import { configureStore, combineReducers } from '@reduxjs/toolkit'
import currenciesReducer from './currenciesSlice'
import autoReducer from './autoSlice'
import flyboxReducer from './flyboxSlice'
import dnrReducer from './dnrSlice'
import lootboxReducer from './lootboxSlice'
import locationReducer from './locationSlice'
import BMFSReducer from './BMFSSlice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  currencies: currenciesReducer,
  automation: autoReducer,
  flybox: flyboxReducer,
  dnr: dnrReducer,
  lootbox: lootboxReducer,
  location: locationReducer,
  BMFS: BMFSReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
