import React from 'react'
import classnames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import LoaderUI from '../../UI/LoaderUI/LoaderUI'

import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductColors.module.scss'
import { currentColorAction } from '../../../store/reducers/currentColor/currentColorSlice'

const ProductColors = () => {
	const {
		data: colors,
		isLoading,
		isError,
	} = productDayDescriptionApi.useGetAllProductColorsQuery('colors')
	const currentColor = useAppSelector((state) => state.currentColor.currentColor)
	const dispatch = useAppDispatch()

	return (
		<div className={style.colors}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
			{colors?.map((color) => (
				<button
					type="button"
					key={color.id}
					className={classnames(style.wrapper_color, {
						[style.active]: currentColor === color.color,
					})}
					onClick={() => dispatch(currentColorAction.changeCurrentColor(color.color))}>
					<span className={style.color} style={{ backgroundColor: `${color.color}` }} />
				</button>
			))}
		</div>
	)
}

export default ProductColors
