import React from 'react'

import SalesTabs from './SalesTabs/SalesTabs'
import SalesCards from './SalesCards/SalesCards'
import SalesBanner from './SalesBanner/SalesBanner'

import style from './Sales.module.scss'

const Sales: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<h2>Распродажа</h2>
			<div className={style.sales_tabs}>
				<SalesTabs />
			</div>
			<div>
				<SalesCards />
			</div>
			<div className={style.sales_banner}>
				<SalesBanner />
			</div>
		</div>
	)
}

export default Sales
