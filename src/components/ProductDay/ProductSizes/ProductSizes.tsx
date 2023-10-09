import React from 'react'

import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductSizes.module.scss'

const ProductSizes = () => {
	const { data: sizes } = productDayDescriptionApi.useGetAllProductSizesQuery('sizes')

	return (
		<div className={style.wrapper}>
			<div className={style.size}>
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
