import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IProductDay } from '../../../types/productDay/productDay.types'

const API_URL = 'http://localhost:5000'

export const productDayApi = createApi({
	reducerPath: 'productDayApi',
	tagTypes: ['ProductDay'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllMainBanner: build.query<IProductDay, string>({
			query: () => ({
				url: '/productDay',
			}),
			providesTags: (result) => ['ProductDay'],
		}),
	}),
})
