import React from 'react'
import classnames from 'classnames'

import CatalogSorting from '../../components/CatalogSorting/CatalogSorting'
import CatalogFilters from '../../components/CatalogFilters/CatalogFilters'

import LoaderUI from '../../components/UI/LoaderUI/LoaderUI'
import SalesCards from '../../components/Sales/SalesCards/SalesCards'

import { tabsCatalogApi } from '../../services/api/tabsCatalog/serviceTabsCatalog'
import { salesCardsApi } from '../../services/api/sales/salesCards/serviceSalesCards'

import style from './CatalogPage.module.scss'

const CatalogPage: React.FC = () => {
	const [activeTab, setActiveTab] = React.useState<string>('')
	const {
		data: tabsCatalog,
		isLoading: isTabsLoading,
		isError: isTabsError,
	} = tabsCatalogApi.useGetAllTabsCatalogQuery('')
	const {
		data: catalogCards,
		isLoading: isCatalogLoading,
		isError: isCatalogError,
	} = salesCardsApi.useGetAllSalesCardsQuery('')

	const handleTabClick = (category: string) => {
		setActiveTab(category)
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
								[style.active]: activeTab === tab.category,
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
				{isCatalogLoading && <LoaderUI />}
				{isCatalogError && <h1>Произошла ошибка загрузки...</h1>}
				{catalogCards?.map((card) => (
					<div>
						<SalesCards />
					</div>
				))}
			</div>
		</div>
	)
}

export default CatalogPage
