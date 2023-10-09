import React from 'react'

import style from './ProductPage.module.scss'
import ProductInfo from '../../components/ProductDay/ProductInfo/ProductInfo'

const ProductPage: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<ProductInfo />
		</div>
	)
}

export default ProductPage
