import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { IArticles } from '../../../types/articles/articles.types'

const API_URL = 'http://localhost:5000'

export const articlesApi = createApi({
	reducerPath: 'articlesApi',
	tagTypes: ['Articles'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getAllArticles: build.query<IArticles[], string>({
			// 2 аргумент возможно нужно будет изменить
			query: () => ({
				url: '/articles',
			}),
			providesTags: (result) => ['Articles'],
		}),
		getArticleById: build.query<IArticles, IArticles>({
			query: (article) => ({
				url: `/article/${article.id}`,
				method: 'POST',
				body: article,
			}),
			providesTags: (result) => ['Articles'],
		}),
	}),
})
