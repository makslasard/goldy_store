import React from 'react'

import style from './SalesCards.module.scss'
import ProductCardUI from '../../UI/ProductCardUI/ProductCardUI'

const SalesCards: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div>
				<ProductCardUI />
			</div>
		</div>
	)
}

export default SalesCards
