import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentCategoryState } from '../../../types/redux/currentCategory/currentCategory'

const initialState: ICurrentCategoryState = {
	currentCategory: 'rings',
}

export const currentCategorySlice = createSlice({
	name: 'currentCategory',
	initialState,
	reducers: {
		changeCurrentCategory: (state, action: PayloadAction<string>) => {
			state.currentCategory = action.payload
		},
	},
})

export const { reducer: currentCategoryReducers, actions: currentCategoryAction } =
	currentCategorySlice
