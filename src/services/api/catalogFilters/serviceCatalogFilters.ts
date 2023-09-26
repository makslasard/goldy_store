import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = 'http://localhost:5000'

export const catalogFilterApi = createApi({
	reducerPath: 'catalogFilterApi',
	tagTypes: ['CatalogFilter'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({}),
})
