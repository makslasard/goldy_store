import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { DownOutlined, EnvironmentOutlined } from '@ant-design/icons'

import { selectCityApi } from '../../../services/api/selectCity/serviceSelectCity'

import style from './DropdownCityUI.module.scss'

const DropdownCityUI: React.FC = () => {
	const [currentCity, setCurrentCity] = useState<string>('Санкт-Петербург')
	const { data: citys, isLoading, isError } = selectCityApi.useGetAllSelectCityQuery('')

	const items: MenuProps['items'] = citys?.map((city) => {
		return {
			label: city.name,
			key: city.id,
			onClick: () => {
				setCurrentCity(city.name)
			},
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
