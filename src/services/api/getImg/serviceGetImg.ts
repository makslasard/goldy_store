import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IGetImgTypes } from '../../../types/getImgTypes/getImg.types'

const API_URL = 'http://localhost:5000'

export const getImgApi = createApi({
	reducerPath: 'getImgApi',
	tagTypes: ['getImg'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllImg: build.query<IGetImgTypes[], string>({
			query: () => ({
				url: '/img',
			}),
			providesTags: (result) => ['getImg'],
		}),
		getAllImgLogo: build.query<IGetImgTypes[], string>({
			query: (title) => ({
				url: '/image',
				params: {
					title,
				},
			}),
			providesTags: (result) => ['getImg'],
		}),
		getAllImgMainBanner: build.query<IGetImgTypes[], string>({
			query: (title) => ({
				url: '/image',
				params: {
					title,
				},
			}),
			providesTags: (result) => ['getImg'],
		}),
		getAllImgNotFound: build.query<IGetImgTypes[], string>({
			query: (title) => ({
				url: '/image',
				params: {
					title,
				},
			}),
			providesTags: (result) => ['getImg'],
		}),
	}),
})
