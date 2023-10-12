import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RoutersNames } from '../../routers/routers'

import LoaderUI from '../UI/LoaderUI/LoaderUI'

import { getImgApi } from '../../services/api/getImg/serviceGetImg'

import style from './Logo.module.scss'

const Logo: React.FC = () => {
	const navigate = useNavigate()
	const { data: logo, isLoading, isError } = getImgApi.useGetAllImgLogoQuery('logo')

	return (
		<div className={style.wrapper}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
			{logo?.map((item) => (
				<button
					type="button"
					key={item.id}
					onClick={() => navigate(RoutersNames.HOME)}
					style={{ border: 'none', backgroundColor: '#fff' }}>
					<img src={item.img} alt={item.title} />
				</button>
			))}
		</div>
	)
}

export default Logo
