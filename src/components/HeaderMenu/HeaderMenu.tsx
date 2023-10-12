import React from 'react'
import { useNavigate } from 'react-router-dom'

import LoaderUI from '../UI/LoaderUI/LoaderUI'

import { navigateMenuApi } from '../../services/api/navigateMenu/serviceNavigateMenu'

import style from './HeaderMenu.module.scss'

const HeaderMenu: React.FC = () => {
	const navigate = useNavigate()
	const {
		data: navigateMenu,
		isLoading,
		isError,
	} = navigateMenuApi.useGetAllNavigateMenuQuery('')

	return (
		<div className={style.wrapper}>
			<ul className={style.menu}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{navigateMenu?.map((item) => (
					<button
						type="button"
						key={item.id}
						className={style.menu_item}
						onClick={() => navigate(item.path)}>
						<p>{item.name}</p>
					</button>
				))}
			</ul>
		</div>
	)
}

export default HeaderMenu
