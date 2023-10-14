import React from 'react'
import { ReadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/no-cycle
import { RoutersNames } from '../../routers/routers'

import LoaderUI from '../UI/LoaderUI/LoaderUI'

import { articlesApi } from '../../services/api/articles/serviceArticles'

import style from './Article.module.scss'

const Article: React.FC = () => {
	const { data: articles, isLoading, isError } = articlesApi.useGetAllArticlesQuery('')
	const navigate = useNavigate()

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper_title}>
				<div className={style.title}>
					<h2>Статьи</h2>
				</div>
				<div className={style.button_articles}>
					<button
						type="button"
						className={style.all_articles}
						onClick={() => navigate(RoutersNames.ARTICLES)}>
						<div className={style.all_icon}>
							<ReadOutlined />
						</div>
						<div className={style.all_text}>
							<p>Все статьи</p>
						</div>
					</button>
				</div>
			</div>
			<div className={style.wrapper_articles}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{articles?.map((article) => (
					<button
						type="button"
						key={article.id}
						className={style.article}
						onClick={() => navigate(RoutersNames.ARTICLE)}>
						<div className={style.article_img}>
							<img src={article.img} alt="article" />
						</div>
						<div className={style.article_date}>
							<p>{article.date}</p>
						</div>
						<div className={style.article_title}>
							<h4>{article.name}</h4>
						</div>
					</button>
				))}
			</div>
		</div>
	)
}

export default Article
