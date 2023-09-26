import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = 'http://localhost:5000'

export const discountsApi = createApi({
	reducerPath: 'discountsApi',
	tagTypes: ['Discounts'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({}),
})
