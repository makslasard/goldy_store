import React from 'react'

import style from './Logo.module.scss'
import { getImgApi } from '../../services/api/getImg/serviceGetImg'

const Logo: React.FC = () => {
	const { data: logo } = getImgApi.useGetAllImgLogoQuery('logo')

	return (
		<div className={style.wrapper}>
			<div className={style.logo}>
				{logo && logo.map((item) => <img key={item.id} src={item.img} alt={item.title} />)}
			</div>
		</div>
	)
}

export default Logo
