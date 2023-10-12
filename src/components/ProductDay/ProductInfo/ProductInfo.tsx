import React from 'react'

import ProductTags from '../ProductTags/ProductTags'
import RatingUI from '../../UI/RatingUI/RatingUI'
import ProductColors from '../ProductColors/ProductColors'
import ProductSizes from '../ProductSizes/ProductSizes'
import ProductActions from '../ProductActions/ProductActions'
import LoaderUI from '../../UI/LoaderUI/LoaderUI'

import { productDayApi } from '../../../services/api/productDay/serviceProductDay'

import style from './ProductInfo.module.scss'

const ProductInfo = () => {
	const { data: productInfo, isLoading, isError } = productDayApi.useGetAllProductInfoQuery('')

	return (
		<div className={style.wrapper}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
			{productInfo?.map((item) => (
				<div className={style.wrapper_product}>
					<div className={style.left}>
						<ProductTags />
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
							<ProductColors />
						</div>
						<div className={style.sizes}>
							<h4>Размеры</h4>
							<ProductSizes />
						</div>
						<div>
							<ProductActions />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default ProductInfo
