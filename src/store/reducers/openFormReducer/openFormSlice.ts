import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOpenFormState } from '../../../types/redux/openForm/openForm'

const initialState: IOpenFormState = {
	formOpen: false,
	nameButton: '',
}

export const openFormSlice = createSlice({
	name: 'openForm',
	initialState,
	reducers: {
		changeStateForm: (state, action: PayloadAction<boolean>) => {
			state.formOpen = action.payload
		},
		changeFormButton: (state, action: PayloadAction<string>) => {
			state.nameButton = action.payload
		},
	},
})

export const { reducer: openFormReducers, actions: openFormAction } = openFormSlice
