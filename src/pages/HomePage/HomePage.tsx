import React from 'react'

import MainBanner from '../../components/MainBanner/MainBanner'
import PopularCategory from '../../components/PopularCategory/PopularCategory'
import ProductDay from '../../components/ProductDay/ProductDay'
import Article from '../../components/Articles/Article'
import Sales from '../../components/Sales/Sales'

import style from './HomePage.module.scss'

const HomePage: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.banner}>
				<MainBanner />
			</div>
			<div className={style.popular_catergory}>
				<PopularCategory />
			</div>
			<div className={style.sales}>
				<Sales />
			</div>
			<div className={style.product_day}>
				<ProductDay />
			</div>
			<div className={style.articles}>
				<Article />
			</div>
		</div>
	)
}

export default HomePage
