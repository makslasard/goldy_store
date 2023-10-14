import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentSizeState } from '../../../types/redux/currentSize/currentSize'

const initialState: ICurrentSizeState = {
	currentSize: 16.5,
}

export const currentSizeSlice = createSlice({
	name: 'currentSize',
	initialState,
	reducers: {
		changeCurrentSize: (state, action: PayloadAction<number>) => {
			state.currentSize = action.payload
		},
	},
})

export const { reducer: currentSizeReducers, actions: currentSizeAction } = currentSizeSlice
