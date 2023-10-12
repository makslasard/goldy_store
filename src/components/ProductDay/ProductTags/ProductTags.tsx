import React from 'react'

import LoaderUI from '../../UI/LoaderUI/LoaderUI'

import { productDayDescriptionApi } from '../../../services/api/productDay/serviceProductDayDescription'

import style from './ProductTags.module.scss'

const ProductTags = () => {
	const {
		data: tags,
		isLoading,
		isError,
	} = productDayDescriptionApi.useGetAllProductTagsQuery('tags')

	return (
		<div className={style.tags}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
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
