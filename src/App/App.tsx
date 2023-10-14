import React from 'react'

import HeaderLayout from '../layouts/HeaderLayout/HeaderLayout'
import AppRouter from '../components/AppRouter/AppRouter'
import FooterLayout from '../layouts/FooterLayout/FooterLayout'

import style from './App.module.scss'

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
