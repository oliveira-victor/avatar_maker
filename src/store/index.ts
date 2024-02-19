import { configureStore } from '@reduxjs/toolkit'

import nameReducer from './reducers/name'

export const store = configureStore({
    reducer: {
        setName: nameReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>