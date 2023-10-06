import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { SelectCityEnum } from '../../../types/selectCity/selectCity.types'

const API_URL = 'http://localhost:5000'

export const selectCityApi = createApi({
	reducerPath: 'selectCityApi',
	tagTypes: ['SelectCity'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllSelectCity: build.query<SelectCityEnum, string>({
			query: () => ({
				url: '/selectCity',
			}),
			providesTags: (result) => ['SelectCity'],
		}),
	}),
})
