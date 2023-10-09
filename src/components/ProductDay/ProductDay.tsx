import React from 'react'

import ProductInfo from './ProductInfo/ProductInfo'
import ProductTitle from './ProductTitle/ProductTitle'

import style from './ProductDay.module.scss'

const ProductDay: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div>
				<ProductTitle />
			</div>
			<div>
				<ProductInfo />
			</div>
		</div>
	)
}

export default ProductDay
