import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { INavigateMenu } from '../../../types/navigateMenu/navigateMenu.types'

const API_URL = 'http://localhost:5000'

export const navigateMenuApi = createApi({
	reducerPath: 'navigateMenuApi',
	tagTypes: ['NavigateMenu'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllNavigateMenu: build.query<INavigateMenu[], string>({
			query: () => ({
				url: '/navigateMenu',
			}),
			providesTags: (result) => ['NavigateMenu'],
		}),
	}),
})
