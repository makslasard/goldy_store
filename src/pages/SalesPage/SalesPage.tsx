import React from 'react'

import style from './SalesPage.module.scss'
import { salesListPageApi } from '../../services/api/sales/salesListPage/salesListPage'

const SalesPage: React.FC = () => {
	const { data: salesListPage } = salesListPageApi.useGetAllSaleListPageQuery('')

	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<h2>Акции</h2>
			</div>
			<div className={style.sales_list}>
				{salesListPage?.map((sale) => (
					<div className={style.sale}>
						<div className={style.image}>
							<img src={sale.img} alt="sale" />
						</div>
						<div className={style.title}>
							<h4>{sale.title}</h4>
						</div>
						<div className={style.date}>
							<p>{sale.date}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default SalesPage
