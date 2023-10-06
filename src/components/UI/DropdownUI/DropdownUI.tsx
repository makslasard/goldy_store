import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

import { DownOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { selectCityApi } from '../../../services/api/selectCity/serviceSelectCity'

import style from './DropdownUI.module.scss'

const DropdownUI: React.FC = () => {
	const { data } = selectCityApi.useGetAllSelectCityQuery('')

	const items: MenuProps['items'] = [
		{
			label: data?.[0],
			key: 1,
		},
		{
			label: data?.[1],
			key: 2,
		},
		{
			label: data?.[2],
			key: 3,
		},
		{
			label: data?.[3],
			key: 4,
		},
	]

	return (
		<div className={style.wrapper}>
			<Dropdown menu={{ items }} className={style.menu}>
				<Space>
					<div className={style.dropdown}>
						<EnvironmentOutlined />
						Санкт-Петербург
						<DownOutlined />
					</div>
				</Space>
			</Dropdown>
		</div>
	)
}

export default DropdownUI
