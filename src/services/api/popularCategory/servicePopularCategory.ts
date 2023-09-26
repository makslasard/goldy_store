import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = 'http://localhost:5000'

export const popularCategoryApi = createApi({
	reducerPath: 'popularCategoryApi',
	tagTypes: ['PopularCategory'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({}),
})
