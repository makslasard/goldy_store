import React from 'react'

import LoaderUI from '../../UI/LoaderUI/LoaderUI'

import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductColors.module.scss'

const ProductColors = () => {
	const {
		data: colors,
		isLoading,
		isError,
	} = productDayDescriptionApi.useGetAllProductColorsQuery('colors')

	return (
		<div className={style.colors}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
			{colors?.map((color) => (
				<div key={color.id} className={style.wrapper_color}>
					<div className={style.color} style={{ backgroundColor: `${color.color}` }} />
				</div>
			))}
		</div>
	)
}

export default ProductColors
