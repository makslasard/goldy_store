import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICatalogSorting } from '../../../types/catalogSorting/catalogSorting.types'

const API_URL = 'http://localhost:5000'

export const catalogSortingApi = createApi({
	reducerPath: 'catalogSortingApi',
	tagTypes: ['CatalogSorting'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllCatalogFilters: build.query<ICatalogSorting[], string>({
			query: () => ({
				url: '/catalogSorting',
			}),
			providesTags: (result) => ['CatalogSorting'],
		}),
	}),
})
