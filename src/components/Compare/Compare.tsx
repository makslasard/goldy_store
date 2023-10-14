import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignalFilled } from '@ant-design/icons'

import { RoutersNames } from '../../routers/routers'

import style from './Compare.module.scss'

const Compare: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className={style.wrapper}>
			<SignalFilled
				className={style.copmare_icon}
				onClick={() => navigate(RoutersNames.COMPARE)}
			/>
		</div>
	)
}

export default Compare
