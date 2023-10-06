import React from 'react'

import HeaderLayout from '../layouts/HeaderLayout/HeaderLayout'

import style from './App.module.scss'
import FooterLayout from '../layouts/FooterLayout/FooterLayout'
import AppRouter from '../components/AppRouter/AppRouter'

const App: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<HeaderLayout />
			<AppRouter />
			<FooterLayout />
		</div>
	)
}

export default App
