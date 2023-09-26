import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = 'http://localhost:5000'

export const navigateMenuApi = createApi({
	reducerPath: 'navigateMenuApi',
	tagTypes: ['NavigateMenu'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({}),
})
