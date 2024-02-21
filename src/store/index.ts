import { configureStore } from '@reduxjs/toolkit'

import nameReducer from './reducers/name'
import charReducer from './reducers/avatarLayers'

export const store = configureStore({
    reducer: {
        setName: nameReducer,
        setCharLayer: charReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>