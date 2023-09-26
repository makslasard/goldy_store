import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = 'http://localhost:5000'

export const selectCityApi = createApi({
	reducerPath: 'selectCityApi',
	tagTypes: ['SelectCity'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({}),
})
