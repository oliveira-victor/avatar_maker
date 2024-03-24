import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { aliceLayers } from '../../utils/data/aliceData'

type avatarState = {
    avatarLayers: {
        skin: string
        eyes: string
        mouth: string
        hair: string
        top: string
        bottom: string
        shoes: string
        features: string
        extra: string
        background: string
    }
}

const initialState: avatarState = {
    avatarLayers: {
        skin: '',
        eyes: '',
        mouth: '',
        hair: '',
        top: '',
        bottom: '',
        shoes: '',
        features: '',
        extra: '',
        background: ''
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

            if (action.payload.includes("hair") || action.payload.includes("hairEmpty")) {
                state.avatarLayers.hair = action.payload
            }

            if (action.payload.includes("top")) {
                state.avatarLayers.top = action.payload
            }

            if (action.payload.includes("bottom") || action.payload.includes("bottomEmpty")) {
                state.avatarLayers.bottom = action.payload
            }

            if (action.payload.includes("shoes") || action.payload.includes("shoesEmpty")) {
                state.avatarLayers.shoes = action.payload
            }

            if (action.payload.includes("features") || action.payload.includes("featuresEmpty")) {
                state.avatarLayers.features = action.payload
            }

            if (action.payload.includes("extra") || action.payload.includes("extraEmpty")) {
                state.avatarLayers.extra = action.payload
            }

            if (action.payload.includes("background") || action.payload.includes("backgroundEmpty")) {
                state.avatarLayers.background = action.payload
            }

            if (action.payload.includes("alice")) {
                state.avatarLayers.skin = aliceLayers.skin
                state.avatarLayers.eyes = aliceLayers.eyes
                state.avatarLayers.mouth = aliceLayers.mouth
                state.avatarLayers.hair = aliceLayers.hair
                state.avatarLayers.top = aliceLayers.top
                state.avatarLayers.bottom = aliceLayers.bottom
                state.avatarLayers.shoes = aliceLayers.shoes
                state.avatarLayers.features = aliceLayers.features
                state.avatarLayers.extra = aliceLayers.extra
                state.avatarLayers.background = aliceLayers.background
            }
        }
    }
})

export const { setCharLayer } = nameSlice.actions
export default nameSlice.reducer