import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { ISalesBanners } from '../../../../types/sales/salesBanners/salesBanners.types'

const API_URL = 'http://localhost:5000'

export const salesBannersApi = createApi({
	reducerPath: 'salesBannersApi',
	tagTypes: ['SalesBanners'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllSalesBanners: build.query<ISalesBanners[], string>({
			query: () => ({
				url: '/salesBanners',
			}),
			providesTags: (result) => ['SalesBanners'],
		}),
	}),
})
