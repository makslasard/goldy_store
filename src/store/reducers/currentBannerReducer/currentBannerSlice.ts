import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentBanner } from '../../../types/redux/currentBanner/currentBanner'

const initialState: ICurrentBanner = {
	currentBanner: 2,
}

export const currentBannerSlice = createSlice({
	name: 'currentBanner',
	initialState,
	reducers: {
		changeCurrentBanner: (state, action: PayloadAction<number>) => {
			state.currentBanner = action.payload

			if (state.currentBanner === 0) {
				state.currentBanner = 3
			} else if (state.currentBanner === 4) {
				state.currentBanner = 1
			}
		},
	},
})

export const { reducer: currentBannerReducers, actions: currentBannerAction } = currentBannerSlice
