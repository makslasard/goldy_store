import React from 'react'

import LoaderUI from '../../UI/LoaderUI/LoaderUI'
import ProductCardUI from '../../UI/ProductCardUI/ProductCardUI'

import { salesCardsApi } from '../../../services/api/sales/salesCards/serviceSalesCards'

import style from './SalesCards.module.scss'

const SalesCards: React.FC = () => {
	const { data: salesCard, isLoading, isError } = salesCardsApi.useGetAllSalesCardsQuery('')

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper_card}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{salesCard?.map((item) => <ProductCardUI key={item.id} item={item} />)}
			</div>
		</div>
	)
}

export default SalesCards
