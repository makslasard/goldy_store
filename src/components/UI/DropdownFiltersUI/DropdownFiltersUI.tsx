import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'

import { ICatalogFiltersProps } from '../../../types/catalogFilters/catalogFilters.types'

import style from './DropdownFiltersUI.module.scss'

const DropdownFiltersUI: React.FC<ICatalogFiltersProps> = ({ filterOptions }) => {
	const [currentFilter, setCurrentFilter] = useState<string>('Фильтры')

	const items: MenuProps['items'] = filterOptions.map((filter) => {
		return {
			label: filter.name,
			key: filter.id,
		}
	})

	return (
		<div className={style.wrapper}>
			<Dropdown menu={{ items }} className={style.menu}>
				<Space>
					<div className={style.dropdown}>
						<CaretDownOutlined />
						{currentFilter}
					</div>
				</Space>
			</Dropdown>
		</div>
	)
}

export default DropdownFiltersUI
