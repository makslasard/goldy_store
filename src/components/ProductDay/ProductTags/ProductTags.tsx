import React from 'react'

import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductTags.module.scss'

const ProductTags = () => {
	const { data: tags } = productDayDescriptionApi.useGetAllProductTagsQuery('tags')

	return (
		<div className={style.tags}>
			{tags?.map((tag) => (
				<span
					key={tag.id}
					className={style.tag}
					style={{ backgroundColor: `${tag.color}` }}>
					<p>{tag.name}</p>
				</span>
			))}
		</div>
	)
}

export default ProductTags
