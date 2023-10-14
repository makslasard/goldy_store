import React from 'react'
import classnames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import LoaderUI from '../../UI/LoaderUI/LoaderUI'

import { currentSizeAction } from '../../../store/reducers/currentSize/currentSizeSlice'
import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductSizes.module.scss'

const ProductSizes = () => {
	const {
		data: sizes,
		isLoading,
		isError,
	} = productDayDescriptionApi.useGetAllProductSizesQuery('sizes')
	const currentSize = useAppSelector((state) => state.currentSize.currentSize)
	const dispatch = useAppDispatch()

	const handleTabClick = (size: number) => {
		dispatch(currentSizeAction.changeCurrentSize(size))
	}

	return (
		<div className={style.wrapper}>
			<div className={style.size}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{sizes?.map((size) => (
					<div key={size.id} className={style.wrapper_tabs}>
						<button
							type="button"
							className={classnames(style.size_button, {
								[style.active]: currentSize === size.size,
								[style.end]: !size.inStock,
							})}
							onClick={() => handleTabClick(size.size)}>
							<p>{size.size}</p>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductSizes
