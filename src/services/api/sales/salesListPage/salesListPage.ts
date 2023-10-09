import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ISalesListPage } from '../../../../types/sales/salesListPage/salesListPage.types'

const API_URL = 'http://localhost:5000'

export const salesListPageApi = createApi({
	reducerPath: 'salesListPageApi',
	tagTypes: ['SalesListPage'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllSaleListPage: build.query<ISalesListPage[], string>({
			query: () => ({
				url: '/saleListPage',
			}),
			providesTags: (result) => ['SalesListPage'],
		}),
	}),
})
