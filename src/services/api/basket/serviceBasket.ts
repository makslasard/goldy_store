import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IBasketData } from '../../../types/basket/basket.types'

const API_URL = 'http://localhost:5000'

export const basketApi = createApi({
	reducerPath: 'basketApi',
	tagTypes: ['Basket'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		addProductInBasket: build.mutation<IBasketData, IBasketData>({
			query: (product) => ({
				url: `/basket`,
				method: 'POST',
				body: product,
			}),
			invalidatesTags: ['Basket'],
		}),
		deleteProductInBasket: build.mutation<IBasketData, IBasketData>({
			query: (product) => ({
				url: `/basket/${product.id}`,
				method: 'DELETE',
				body: product,
			}),
			invalidatesTags: ['Basket'],
		}),
	}),
})
