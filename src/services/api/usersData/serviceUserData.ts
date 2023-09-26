import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = 'http://localhost:5000'

export const usersDataApi = createApi({
	reducerPath: 'usersDataApi',
	tagTypes: ['UsersData'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({}),
})
