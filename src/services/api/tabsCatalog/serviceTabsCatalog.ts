import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ITabsCatalog } from '../../../types/tabsCatalog/tabsCatalog.types'

const API_URL = 'http://localhost:5000'

export const tabsCatalogApi = createApi({
	reducerPath: 'tabsCatalogApi',
	tagTypes: ['TabsCatalog'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllTabsCatalog: build.query<ITabsCatalog[], string>({
			query: () => ({
				url: '/tabsCatalog',
			}),
			providesTags: (result) => ['TabsCatalog'],
		}),
	}),
})
