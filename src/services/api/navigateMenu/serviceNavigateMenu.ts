import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { NavigateMenuEnum } from '../../../types/navigateMenu/navigateMenu.types'

const API_URL = 'http://localhost:5000'

export const navigateMenuApi = createApi({
	reducerPath: 'navigateMenuApi',
	tagTypes: ['NavigateMenu'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllNavigateMenu: build.query<NavigateMenuEnum, string>({
			query: () => ({
				url: '/navigateMenu',
			}),
			providesTags: (result) => ['NavigateMenu'],
		}),
	}),
})
