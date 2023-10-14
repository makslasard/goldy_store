import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentRatingState } from '../../../types/redux/currentRating/currentRating'

const initialState: ICurrentRatingState = {
	currentRating: 0,
}

export const currentRatingSlice = createSlice({
	name: 'currentRating',
	initialState,
	reducers: {
		changeCurrentRating: (state, action: PayloadAction<number>) => {
			state.currentRating = action.payload
		},
	},
})

export const { reducer: currentRatingReducers, actions: currentRatingAction } = currentRatingSlice
