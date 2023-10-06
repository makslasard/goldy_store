import React from 'react'

import { navigateMenuApi } from '../../services/api/navigateMenu/serviceNavigateMenu'

import style from './HeaderMenu.module.scss'

const HeaderMenu: React.FC = () => {
	const { data: navigateMenu } = navigateMenuApi.useGetAllNavigateMenuQuery('')

	return (
		<div className={style.wrapper}>
			<ul className={style.menu}>
				{navigateMenu &&
					navigateMenu.map((item) => (
						<li key={item.id} className={style.menu_item}>
							{item.name}
						</li>
					))}
			</ul>
		</div>
	)
}

export default HeaderMenu
