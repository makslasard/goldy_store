import React from 'react'
import { useAppSelector } from '../../hooks/redux'

import LoaderUI from '../UI/LoaderUI/LoaderUI'
// eslint-disable-next-line import/no-cycle
import ProductCardUI from '../UI/ProductCardUI/ProductCardUI'

import { productCatalogApi } from '../../services/api/productCatalog/serviceProductCatalog'

import style from './ProductCatalog.module.scss'

const ProductCatalog: React.FC = () => {
	const currentCategory = useAppSelector((state) => state.currentCategory.currentCategory)
	const {
		data: productCatalog,
		isLoading,
		isError,
	} = productCatalogApi.useGetAllProductCatalogCategoryQuery(currentCategory)

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper_card}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{productCatalog?.map((item) => <ProductCardUI key={item.id} item={item} />)}
			</div>
		</div>
	)
}

export default ProductCatalog
