import React from 'react'
import classnames from 'classnames'

import { tabsCatalogApi } from '../../services/api/tabsCatalog/serviceTabsCatalog'

import style from './CatalogPage.module.scss'

const CatalogPage: React.FC = () => {
	const [activeTab, setActiveTab] = React.useState<string>('')
	const { data: tabsCatalog } = tabsCatalogApi.useGetAllTabsCatalogQuery('')

	const handleTabClick = (category: string) => {
		setActiveTab(category)
	}

	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<h2>Каталог ювелирных изделий</h2>
			</div>
			<div className={style.tabs}>
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
		</div>
	)
}

export default CatalogPage
