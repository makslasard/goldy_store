import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IProductCatalog } from '../../../types/productCatalog/productCatalog.types'

const API_URL = 'http://localhost:5000'

export const productCatalogApi = createApi({
	reducerPath: 'productCatalogApi',
	tagTypes: ['ProductCatalog'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllProductCatalog: build.query<IProductCatalog[], string>({
			query: () => ({
				url: '/productCatalog',
			}),
			providesTags: (result) => ['ProductCatalog'],
		}),
		getAllProductCatalogCategory: build.query<IProductCatalog[], string>({
			query: (category) => ({
				url: `/productCatalog`,
				params: {
					category,
				},
			}),
			providesTags: (result) => ['ProductCatalog'],
		}),
	}),
})
