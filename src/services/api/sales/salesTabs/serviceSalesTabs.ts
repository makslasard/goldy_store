import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { SalesTabsEnum } from '../../../../types/sales/salesTabs/salesTabs'

const API_URL = 'http://localhost:5000'

export const salesTabsApi = createApi({
	reducerPath: 'salesTabsApi',
	tagTypes: ['SalesTabs'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllSalesTabs: build.query<SalesTabsEnum, string>({
			query: () => ({
				url: '/salesTabs',
			}),
			providesTags: (result) => ['SalesTabs'],
		}),
	}),
})
