import React from 'react'

import style from './ProductTitle.module.scss'

const ProductTitle = () => {
	return (
		<div className={style.wrapper_title}>
			<div className={style.title}>
				<h2>Товар дня</h2>
			</div>
		</div>
	)
}

export default ProductTitle
