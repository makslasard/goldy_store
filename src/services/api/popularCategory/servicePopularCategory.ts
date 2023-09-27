import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IPopularCategory } from '../../../types/popularCategory/popularCategory.types'

const API_URL = 'http://localhost:5000'

export const popularCategoryApi = createApi({
	reducerPath: 'popularCategoryApi',
	tagTypes: ['PopularCategory'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllMainBanner: build.query<IPopularCategory[], string>({
			query: () => ({
				url: '/popularCategory',
			}),
			providesTags: (result) => ['PopularCategory'],
		}),
	}),
})
