import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

import { articlesApi } from '../../services/api/articles/serviceArticles'

import style from './Article.module.scss'
import LoaderUI from '../UI/LoaderUI/LoaderUI'

const Article: React.FC = () => {
	const { data: articles, isLoading, isError } = articlesApi.useGetAllArticlesQuery('')

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper_title}>
				<div className={style.title}>
					<h2>Статьи</h2>
				</div>
				<div className={style.wrapper_buttons}>
					<button type="button" className={style.left_arrow}>
						<ArrowLeftOutlined />
					</button>
					<button type="button" className={style.right_arrow}>
						<ArrowRightOutlined />
					</button>
				</div>
			</div>
			<div className={style.wrapper_articles}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{articles?.map((article) => (
					<div key={article.id} className={style.article}>
						<div className={style.article_img}>
							<img src={article.img} alt="article" />
						</div>
						<div className={style.article_date}>
							<p>{article.date}</p>
						</div>
						<div className={style.article_title}>
							<h4>{article.name}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Article
