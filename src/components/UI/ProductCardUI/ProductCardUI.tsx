import React from 'react'
import { Card } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

import RatingUI from '../RatingUI/RatingUI'

import { ISalesCardsProps } from '../../../types/sales/salesCards/salesCards.types'

import style from './ProductCardUI.module.scss'

const ProductCardUI: React.FC<ISalesCardsProps> = ({ item }) => {
	return (
		<div className={style.wrapper}>
			<Card hoverable className={style.card}>
				<div className={style.view}>
					<div className={style.img}>
						<img src={item.img} alt={item.name} />
					</div>
					<div className={style.tags_img}>
						<span>Еще -{item.sales}%</span>
					</div>
					<div className={style.favourites}>
						<button type="button">
							<HeartOutlined />
						</button>
					</div>
				</div>
				<div className={style.description}>
					<div className={style.price}>
						<h3>от {item.newPrice} Р</h3>
						<div className={style.old_price}>
							<span>{item.oldPrice} Р</span>
							<div className={style.tags_price}>
								<p>-{item.sales}%</p>
							</div>
						</div>
						<p className={style.title}>Золотое гладкое обручальное кольцо 3 мм</p>
					</div>
					<div className={style.reviews}>
						<div>
							<RatingUI />
						</div>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default ProductCardUI
