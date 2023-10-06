import React from 'react'

import DropdownUI from '../../components/UI/DropdownUI/DropdownUI'
import Phone from '../../components/Phone/Phone'
import Logo from '../../components/Logo/Logo'
import Auth from '../../components/Auth/Auth'
import Favourites from '../../components/Favourites/Favourites'
import Compare from '../../components/Compare/Compare'
import Basket from '../../components/Basket/Basket'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'

import style from './HeaderLayout.module.scss'

const HeaderLayout: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.top}>
				<div>
					<DropdownUI />
				</div>
				<div>
					<Phone />
				</div>
				<div>
					<Logo />
				</div>
				<div>
					<Auth />
				</div>
				<div className={style.add_product}>
					<div>
						<Favourites />
					</div>
					<div>
						<Compare />
					</div>
					<div>
						<Basket />
					</div>
				</div>
			</div>
			<div className={style.bottom}>
				<div>
					<HeaderMenu />
				</div>
				<div>
					<Search />
				</div>
			</div>
		</div>
	)
}

export default HeaderLayout
