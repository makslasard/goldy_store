import React from 'react'

import { ShoppingOutlined } from '@ant-design/icons'

import style from './Basket.module.scss'

const Basket: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<ShoppingOutlined />
		</div>
	)
}

export default Basket
