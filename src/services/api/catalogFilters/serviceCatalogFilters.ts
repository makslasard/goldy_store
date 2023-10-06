import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { CatalogFilterEnum } from '../../../types/catalogFilters/catalogFilters.types'

const API_URL = 'http://localhost:5000'

export const catalogFilterApi = createApi({
	reducerPath: 'catalogFilterApi',
	tagTypes: ['CatalogFilter'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllCatalogFilters: build.query<CatalogFilterEnum, string>({
			query: () => ({
				url: '/catalogFilters',
			}),
			providesTags: (result) => ['CatalogFilter'],
		}),
	}),
})
