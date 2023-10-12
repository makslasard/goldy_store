import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { SlidersFilled } from '@ant-design/icons'
import { ICatalogSortingProps } from '../../../types/catalogSorting/catalogSorting.types'

import style from './DropdownSortingUI.module.scss'

const DropdownSortingUI: React.FC<ICatalogSortingProps> = ({ optionSort }) => {
	const [currentSort, setCurrentSort] = useState<string>('Cортировать по:')

	const items: MenuProps['items'] = optionSort.map((option) => {
		return {
			label: option.name,
			key: option.id,
		}
	})

	return (
		<div className={style.wrapper}>
			<Dropdown menu={{ items }} className={style.menu}>
				<Space>
					<div className={style.dropdown}>
						<SlidersFilled />
						{currentSort}
					</div>
				</Space>
			</Dropdown>
		</div>
	)
}

export default DropdownSortingUI
