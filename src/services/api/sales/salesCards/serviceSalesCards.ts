import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { ISalesCards } from '../../../../types/sales/salesCards/salesCards.types'

const API_URL = 'http://localhost:5000'

export const salesCardsApi = createApi({
	reducerPath: 'salesCardsApi',
	tagTypes: ['SalesCards'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllSalesCards: build.query<ISalesCards[], string>({
			query: () => ({
				url: '/salesCards',
			}),
			providesTags: (result) => ['SalesCards'],
		}),
	}),
})
