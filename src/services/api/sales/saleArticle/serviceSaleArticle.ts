import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ISaleArticle } from '../../../../types/sales/saleArticle/saleArticle.types'

const API_URL = 'http://localhost:5000'

export const saleArticleApi = createApi({
	reducerPath: 'saleArticleApi',
	tagTypes: ['SaleArticle'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllSaleArticle: build.query<ISaleArticle[], string>({
			query: () => ({
				url: '/saleArticle',
			}),
			providesTags: (result) => ['SaleArticle'],
		}),
	}),
})
