import React from 'react'

import { Space, Spin } from 'antd'

import style from './LoaderUI.module.scss'

const LoaderUI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Space direction="vertical" style={{ width: '100%' }}>
				<Spin tip="Загрузка..." size="large">
					<div className="content" />
				</Spin>
			</Space>
		</div>
	)
}

export default LoaderUI
