import React from 'react'

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

import style from './ProductTitle.module.scss'

const ProductTitle = () => {
	return (
		<div className={style.wrapper_title}>
			<div className={style.title}>
				<h2>Товар дня</h2>
			</div>
			<div className={style.slide}>
				<button type="button" className={style.left_arrow}>
					<ArrowLeftOutlined />
				</button>
				<button type="button" className={style.right_arrow}>
					<ArrowRightOutlined />
				</button>
			</div>
		</div>
	)
}

export default ProductTitle
