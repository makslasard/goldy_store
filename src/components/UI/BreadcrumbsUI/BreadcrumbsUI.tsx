import React from 'react'

import { Breadcrumb } from 'antd'

const BreadcrumbsUI: React.FC = () => {
	return (
		<Breadcrumb
			separator=">"
			items={[
				{
					title: 'Главная',
					href: '/',
				},
				{
					title: 'Каталог',
					href: '/',
				},
				{
					title: 'Кольца',
					href: '/',
				},
				{
					title: 'Кольцо с брилиантом',
					href: '/',
				},
			]}
		/>
	)
}

export default BreadcrumbsUI
