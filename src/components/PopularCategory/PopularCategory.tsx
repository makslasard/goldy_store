import React from 'react'
import { Card } from 'antd'

import { popularCategoryApi } from '../../services/api/popularCategory/servicePopularCategory'

import style from './PopularCategory.module.scss'

const PopularCategory: React.FC = () => {
	const { data: popularCategory } = popularCategoryApi.useGetAllPopularCategoryQuery('')

	return (
		<div className={style.wrapper}>
			<h2>Популярные категории</h2>
			<div className={style.card}>
				{popularCategory?.map((item) => (
					<Card
						key={item.id}
						hoverable
						className={style.card_item}
						cover={<img alt="product" src={item.img} className={style.card_img} />}>
						<div>
							<p>{item.name}</p>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}

export default PopularCategory
