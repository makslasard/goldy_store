import React from 'react'

import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductColors.module.scss'

const ProductColors = () => {
	const { data: colors } = productDayDescriptionApi.useGetAllProductColorsQuery('colors')

	return (
		<div className={style.colors}>
			{colors?.map((color) => (
				<div key={color.id} className={style.wrapper_color}>
					<div className={style.color} style={{ backgroundColor: `${color.color}` }} />
				</div>
			))}
		</div>
	)
}

export default ProductColors
