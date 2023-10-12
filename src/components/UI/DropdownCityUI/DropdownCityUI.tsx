import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { DownOutlined, EnvironmentOutlined } from '@ant-design/icons'

import { ISelectCityProps } from '../../../types/selectCity/selectCity.types'

import style from './DropdownCityUI.module.scss'

const DropdownCityUI: React.FC<ISelectCityProps> = ({ citys }) => {
	const [currentCity, setCurrentCity] = useState<string>('Санкт-Петербург')

	const items: MenuProps['items'] = citys.map((city) => {
		return {
			label: city.name,
			key: city.id,
		}
	})

	return (
		<div className={style.wrapper}>
			<Dropdown menu={{ items }} className={style.menu}>
				<Space>
					<div className={style.dropdown}>
						<EnvironmentOutlined />
						{currentCity}
						<DownOutlined />
					</div>
				</Space>
			</Dropdown>
		</div>
	)
}

export default DropdownCityUI
