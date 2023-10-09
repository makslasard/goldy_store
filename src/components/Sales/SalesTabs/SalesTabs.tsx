import React, { useState } from 'react'
import { Tabs, TabsProps } from 'antd'
import { salesTabsApi } from '../../../services/api/sales/salesTabs/serviceSalesTabs'

import style from './SalesTabs.module.scss'
import { salesCardsApi } from '../../../services/api/sales/salesCards/serviceSalesCards'
import SalesCards from '../SalesCards/SalesCards'

const SalesTabs: React.FC = () => {
	const [currentTab, setCurrentTab] = useState<string>('')
	const { data: salesTabs } = salesTabsApi.useGetAllSalesTabsQuery('')

	const onChange = (key: string) => {
		setCurrentTab(key)
	}

	const saveCurrentTab = (label: string) => {
		setCurrentTab(label)
	}

	const getCardsByCategory = async (category: string) => {
		const { data } = await salesCardsApi.useGetAllSalesCardsCategoryQuery(category)
		return data
	}

	function items(): TabsProps['items'] {
		return salesTabs?.map((tab) => ({
			key: `${tab.id}`,
			label: tab.name,
			children: <SalesCards />,
		}))
	}

	return (
		<div className={style.wrapper}>
			<Tabs defaultActiveKey="1" items={items()} onChange={onChange} />
		</div>
	)
}

export default SalesTabs
