import React from 'react'

import RatingUI from '../UI/RatingUI/RatingUI'

import { productDayApi } from '../../services/api/productDay/serviceProductDay'
import { productDayDescriptionApi } from '../../services/api/productDay/serviceProductDayDescription'

import style from './ProductDay.module.scss'
import ButtonUI from '../UI/ButtonUI/ButtonUI'

const ProductDay: React.FC = () => {
	const { data: productInfo } = productDayApi.useGetAllProductInfoQuery('')
	const { data: tags } = productDayDescriptionApi.useGetAllProductTagsQuery('tags')
	const { data: colors } = productDayDescriptionApi.useGetAllProductColorsQuery('colors')
	const { data: sizes } = productDayDescriptionApi.useGetAllProductSizesQuery('sizes')

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper_title}>
				<div className={style.title}>
					<h2>Товар дня</h2>
				</div>
				<div className={style.slide}>
					<button type="button" className={style.left_arrow}>
						Левая стрелка
					</button>
					<button type="button" className={style.right_arrow}>
						Правая стрелка
					</button>
				</div>
			</div>
			{productInfo &&
				productInfo.map((item) => (
					<div className={style.wrapper_product}>
						<div className={style.left}>
							<div className={style.tags}>
								{tags &&
									tags.map((tag) => (
										<span
											key={tag.id}
											className={style.tag}
											style={{ backgroundColor: `${tag.color}` }}>
											<p>{tag.name}</p>
										</span>
									))}
							</div>
							<div className={style.img_product}>
								<img src={item.img} alt={item.name} />
							</div>
						</div>
						<div className={style.right}>
							<div className={style.rating}>
								<RatingUI />
							</div>
							<div className={style.title}>
								<h3>{item.name}</h3>
							</div>
							<div className={style.number_product}>
								<span>{item.item_number}</span>
							</div>
							<div className={style.price}>
								<div className={style.newPrice}>
									<p>{item.newPrice}</p>
								</div>
								<div className={style.oldPrice}>
									<p>{item.newPrice}</p>
								</div>
								<div className={style.sales}>
									<p>-{item.sales}%</p>
								</div>
							</div>
							<div className={style.separator} />
							<div className={style.wrapper_colors}>
								<h4>Цвет</h4>
								<div className={style.colors}>
									{colors &&
										colors.map((color) => (
											<div key={color.id} className={style.wrapper_color}>
												<div
													className={style.color}
													style={{ backgroundColor: `${color.color}` }}
												/>
											</div>
										))}
								</div>
							</div>
							<div className={style.sizes}>
								<h4>Размеры</h4>
								{sizes &&
									sizes.map((size) => (
										<div className={style.size}>
											<p>{size.size}</p>
										</div>
									))}
							</div>
							<div>
								<div className={style.buttons}>
									<div className={style.in_basket}>
										<ButtonUI>В корзину</ButtonUI>
									</div>
									<div className={style.buy}>
										<ButtonUI>Купить в один клик</ButtonUI>
									</div>
								</div>
								<div className={style.actions}>
									<div className={style.save}>Сохранить</div>
									<div className={style.statistic}>Статистика</div>
									<div className={style.share}>Поделиться</div>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	)
}

export default ProductDay
