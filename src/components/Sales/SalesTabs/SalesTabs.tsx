import React from 'react'
import classnames from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import LoaderUI from '../../UI/LoaderUI/LoaderUI'

import { salesTabsApi } from '../../../services/api/sales/salesTabs/serviceSalesTabs'
import { currentCategoryAction } from '../../../store/reducers/currentCategory/currentCategorySlice'

import style from './SalesTabs.module.scss'

const SalesTabs: React.FC = () => {
	const { data: salesTabs, isLoading, isError } = salesTabsApi.useGetAllSalesTabsQuery('')
	const currentCategory = useAppSelector((state) => state.currentCategory.currentCategory)
	const dispatch = useAppDispatch()

	const handleTabClick = (category: string) => {
		dispatch(currentCategoryAction.changeCurrentCategory(category))
	}

	return (
		<div className={style.tabs}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
			{salesTabs?.map((tab) => (
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
	)
}

export default SalesTabs
