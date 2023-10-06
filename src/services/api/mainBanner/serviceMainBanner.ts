import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IMainBanner } from '../../../types/mainBanner/mainBanner.types'

const API_URL = 'http://localhost:5000'

export const mainBannerApi = createApi({
	reducerPath: 'mainBannerApi',
	tagTypes: ['MainBanner'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllMainBanner: build.query<IMainBanner[], string>({
			query: () => ({
				url: '/mainBanner',
			}),
			providesTags: (result) => ['MainBanner'],
		}),
	}),
})
