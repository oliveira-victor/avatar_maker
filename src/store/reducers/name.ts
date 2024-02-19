import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type NameState = {
    charName: string
}

const initialState: NameState = {
    charName: ''
}

const nameSlice = createSlice({
    name: 'charName',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.charName = action.payload
        }
    }
})

export const { setName } = nameSlice.actions
export default nameSlice.reducer