import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeartOutlined } from '@ant-design/icons'

import { RoutersNames } from '../../routers/routers'

import style from './Favourites.module.scss'

const Favourites: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className={style.wrapper}>
			<HeartOutlined
				className={style.favourites_icon}
				onClick={() => navigate(RoutersNames.FAVOURITES)}
			/>
		</div>
	)
}

export default Favourites
