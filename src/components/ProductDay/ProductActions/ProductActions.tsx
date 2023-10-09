import React from 'react'

import { BarChartOutlined, HeartOutlined, SendOutlined } from '@ant-design/icons'

import style from './ProductActions.module.scss'

const ProductActions = () => {
	return (
		<div className={style.wrapper_buttons}>
			<div className={style.buttons}>
				<div className={style.in_basket}>
					<button type="button">В корзину</button>
				</div>
				<div className={style.buy}>
					<button type="button">Купить в 1 клик</button>
				</div>
			</div>
			<div className={style.actions}>
				<div className={style.save}>
					<div>
						<HeartOutlined />
					</div>
					<div>
						<p>Сохранить</p>
					</div>
				</div>
				<div className={style.compare}>
					<div>
						<BarChartOutlined />
					</div>
					<div>
						<p>Сравнить</p>
					</div>
				</div>
				<div className={style.share}>
					<div>
						<SendOutlined />
					</div>
					<div>
						<p>Поделиться</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductActions
