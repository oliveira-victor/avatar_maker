import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type avatarState = {
    avatarLayers: {
        skin: string
        eyes: string
        mouth: string
        hair: string
        top: string
    }
}

const initialState: avatarState = {
    avatarLayers: {
        skin: '',
        eyes: '',
        mouth: '',
        hair: '',
        top: ''
    }
}

const nameSlice = createSlice({
    name: 'avatarLayers',
    initialState,
    reducers: {
        setCharLayer: (state, action: PayloadAction<string>) => {
            if (action.payload.includes("skin")) {
                state.avatarLayers.skin = action.payload
            }

            if (action.payload.includes("eyes")) {
                state.avatarLayers.eyes = action.payload
            }

            if (action.payload.includes("mouth")) {
                state.avatarLayers.mouth = action.payload
            }

            if (action.payload.includes("hair")) {
                state.avatarLayers.hair = action.payload
            }

            if (action.payload.includes("top")) {
                state.avatarLayers.top = action.payload
            }
        }
    }
})

export const { setCharLayer } = nameSlice.actions
export default nameSlice.reducer