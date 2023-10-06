import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
	IProductDayColors,
	IProductDaySizes,
	IProductDayTags,
} from '../../../types/productDay/productDayDescription.types'

const API_URL = 'http://localhost:5000'

export const productDayDescriptionApi = createApi({
	reducerPath: 'productDayDescriptionApi',
	tagTypes: ['productDayDescription'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllProductTags: build.query<IProductDayTags[], string>({
			query: (category = 'tags') => ({
				url: '/productDayDescription',
				params: {
					category,
				},
			}),
			providesTags: (result) => ['productDayDescription'],
		}),
		getAllProductColors: build.query<IProductDayColors[], string>({
			query: (category = 'colors') => ({
				url: '/productDayDescription',
				params: {
					category,
				},
			}),
			providesTags: (result) => ['productDayDescription'],
		}),
		getAllProductSizes: build.query<IProductDaySizes[], string>({
			query: (category = 'sizes') => ({
				url: '/productDayDescription',
				params: {
					category,
				},
			}),
			providesTags: (result) => ['productDayDescription'],
		}),
	}),
})
