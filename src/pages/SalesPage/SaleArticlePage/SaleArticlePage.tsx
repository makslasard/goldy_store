import React from 'react'

import { saleArticleApi } from '../../../services/api/sales/saleArticle/serviceSaleArticle'

import style from './SaleArticlePage.module.scss'
import SalesCards from '../../../components/Sales/SalesCards/SalesCards'

const SaleArticlePage: React.FC = () => {
	const { data: saleArticle } = saleArticleApi.useGetAllSaleArticleQuery('')

	return (
		<div className={style.wrapper}>
			<div className={style.main_info}>
				{saleArticle?.map((sale) => (
					<div key={sale.id} className={style.wrapper_sale}>
						<div className={style.title}>
							<span>Акции</span>
							<h2>{sale.name}</h2>
						</div>
						<div className={style.date}>
							<span>Сроки проведения ации</span>
							<p>{sale.date}</p>
						</div>
						<div className={style.banner}>
							<img src={sale.img} alt="sale_banner" />
						</div>
						<div className={style.description}>
							<span>Описание</span>
							<p>{sale.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className={style.products_in_sale}>
				<div className={style.products_title}>
					<h4>Товары участвующие в акции</h4>
				</div>
				<div className={style.products_card}>
					<SalesCards />
				</div>
			</div>
		</div>
	)
}

export default SaleArticlePage
