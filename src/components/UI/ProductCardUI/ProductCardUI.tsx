import React from 'react'
import { Card } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

import { salesCardsApi } from '../../../services/api/sales/salesCards/serviceSalesCards'

import RatingUI from '../RatingUI/RatingUI'

import style from './ProductCardUI.module.scss'

const ProductCardUI: React.FC = () => {
	const { data: salesCard } = salesCardsApi.useGetAllSalesCardsQuery('')

	return (
		<div className={style.wrapper}>
			{salesCard &&
				salesCard.map((item) => (
					<Card key={item.id} hoverable className={style.card}>
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
								<p className={style.title}>
									Золотое гладкое обручальное кольцо 3 мм
								</p>
							</div>
							<div className={style.reviews}>
								<div>
									<RatingUI />
								</div>
							</div>
						</div>
					</Card>
				))}
		</div>
	)
}

export default ProductCardUI
