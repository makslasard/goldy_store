import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthDataUsers, IAuthState } from '../../../types/auth/auth.types'

const initialState: IAuthState = {
	isAuth: false,
	authDateUsers: [
		{ username: 'user', password: '123' },
		{ username: 'admin', password: '123' },
		{ username: 'max', password: '123' },
	],
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<IAuthDataUsers>) => {
			const isUserInArray = state.authDateUsers.find(
				(user) =>
					user.username === action.payload.username &&
					user.password === action.payload.password
			)
			if (isUserInArray) {
				state.isAuth = true
			}
		},
		logout: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
	},
})

export const { reducer: authReducer, actions: authActions } = authSlice
