import React from 'react'

import LoaderUI from '../../UI/LoaderUI/LoaderUI'

import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductSizes.module.scss'

const ProductSizes = () => {
	const {
		data: sizes,
		isLoading,
		isError,
	} = productDayDescriptionApi.useGetAllProductSizesQuery('sizes')

	return (
		<div className={style.wrapper}>
			<div className={style.size}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{sizes?.map((size) => (
					<div className={style.size_button}>
						<p>{size.size}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductSizes
