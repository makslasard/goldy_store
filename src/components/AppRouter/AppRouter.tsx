import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '../../routers/routers'

import style from './AppRouter.module.scss'

const AppRouter: React.FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	return (
		<div className={style.wrapper}>
			{isAuth ? (
				<div>
					<Routes>
						{privateRoutes.map((router) => (
							<Route
								path={router.path}
								element={router.component}
								key={router.path}
							/>
						))}
					</Routes>
				</div>
			) : (
				<div>
					<Routes>
						{publicRoutes.map((router) => (
							<Route
								path={router.path}
								element={router.component}
								key={router.path}
							/>
						))}
					</Routes>
				</div>
			)}
		</div>
	)
}

export default AppRouter
