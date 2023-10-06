import React from 'react'

import { PhoneOutlined } from '@ant-design/icons'

import style from './Phone.module.scss'

const Phone: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div>
				<PhoneOutlined />
			</div>
			<div>
				<p>8 800 785-25-35</p>
			</div>
		</div>
	)
}

export default Phone
