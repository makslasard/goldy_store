import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingOutlined } from '@ant-design/icons'

import { RoutersNames } from '../../routers/routers'

import style from './Basket.module.scss'

const Basket: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className={style.wrapper}>
			<ShoppingOutlined
				className={style.basket_icon}
				onClick={() => navigate(RoutersNames.BASKET)}
			/>
		</div>
	)
}

export default Basket
