import React from 'react'

import Phone from '../../components/Phone/Phone'
import Logo from '../../components/Logo/Logo'
import Auth from '../../components/Auth/Auth'
import Favourites from '../../components/Favourites/Favourites'
import Compare from '../../components/Compare/Compare'
import Basket from '../../components/Basket/Basket'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import Citys from '../../components/Citys/Citys'

import style from './HeaderLayout.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { authActions } from '../../store/reducers/authReducer/authSlice'

const HeaderLayout: React.FC = () => {
	const isAuth = useAppSelector((state) => state.authUsers.isAuth)
	const dispatch = useAppDispatch()

	return (
		<div className={style.wrapper}>
			<div className={style.top}>
				<div>
					<Citys />
				</div>
				<div>
					<Phone />
				</div>
				<div>
					<Logo />
				</div>
				<div>
					{isAuth ? (
						<div className={style.auth_user}>
							<div className={style.user_name}>
								<p>Имя пользователя: </p>
								<span>Максим</span>
							</div>
							<div className={style.user_logout}>
								<button
									type="button"
									onClick={() => dispatch(authActions.logout(false))}>
									Выйти
								</button>
							</div>
						</div>
					) : (
						<Auth />
					)}
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
