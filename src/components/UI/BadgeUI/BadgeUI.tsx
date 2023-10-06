import React from 'react'
import { Badge } from 'antd'

import basket from '../../../assets/img/header/basket-min.svg'

import style from './BadgeUI.module.scss'

const BadgeUI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Badge size="small" count={1}>
				<img src={basket} alt="basket" className={style.basket_img} />
			</Badge>
		</div>
	)
}

export default BadgeUI
