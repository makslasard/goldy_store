import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IUserData } from '../../../types/usersData/userData.types'

const API_URL = 'http://localhost:5000'

export const usersDataApi = createApi({
	reducerPath: 'usersDataApi',
	tagTypes: ['UsersData'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllUsersData: build.query<IUserData[], string>({
			query: () => ({
				url: '/usersData',
			}),
			providesTags: (result) => ['UsersData'],
		}),
	}),
})
