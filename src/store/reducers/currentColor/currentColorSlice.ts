import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentColorState } from '../../../types/redux/currentColor/currentColor'

const initialState: ICurrentColorState = {
	currentColor: '#D9D9D9',
}

export const currentColorSlice = createSlice({
	name: 'currentColor',
	initialState,
	reducers: {
		changeCurrentColor: (state, action: PayloadAction<string>) => {
			state.currentColor = action.payload
		},
	},
})

export const { reducer: currentColorReducers, actions: currentColorAction } = currentColorSlice
