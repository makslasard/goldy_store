import React from 'react'

import { HeartOutlined } from '@ant-design/icons'

import style from './Favourites.module.scss'

const Favourites: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<HeartOutlined />
		</div>
	)
}

export default Favourites
