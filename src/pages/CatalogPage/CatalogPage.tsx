import React from 'react'
import classnames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import CatalogSorting from '../../components/CatalogSorting/CatalogSorting'
import CatalogFilters from '../../components/CatalogFilters/CatalogFilters'

// eslint-disable-next-line import/no-cycle
import ProductCatalog from '../../components/ProductCatalog/ProductCatalog'
import LoaderUI from '../../components/UI/LoaderUI/LoaderUI'

import { tabsCatalogApi } from '../../services/api/tabsCatalog/serviceTabsCatalog'
import { currentCategoryAction } from '../../store/reducers/currentCategory/currentCategorySlice'

import style from './CatalogPage.module.scss'

const CatalogPage: React.FC = () => {
	const currentCategory = useAppSelector((state) => state.currentCategory.currentCategory)
	const dispatch = useAppDispatch()
	const {
		data: tabsCatalog,
		isLoading: isTabsLoading,
		isError: isTabsError,
	} = tabsCatalogApi.useGetAllTabsCatalogQuery('')

	const handleTabClick = (category: string) => {
		dispatch(currentCategoryAction.changeCurrentCategory(category))
	}

	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<h2>Каталог ювелирных изделий</h2>
			</div>
			<div className={style.tabs}>
				{isTabsLoading && <LoaderUI />}
				{isTabsError && <h1>Произошла ошибка загрузки...</h1>}
				{tabsCatalog?.map((tab) => (
					<div key={tab.id} className={style.wrapper_tabs}>
						<button
							type="button"
							className={classnames(style.tabs_button, {
								[style.active]: currentCategory === tab.category,
							})}
							onClick={() => handleTabClick(tab.category)}>
							<p>{tab.name}</p>
						</button>
					</div>
				))}
			</div>
			<div className={style.actions}>
				<div>
					<CatalogFilters />
				</div>
				<div>
					<CatalogSorting />
				</div>
			</div>
			<div className={style.card_category}>
				<div>
					<ProductCatalog />
				</div>
			</div>
		</div>
	)
}

export default CatalogPage
