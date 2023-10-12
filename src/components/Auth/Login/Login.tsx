import React from 'react'

import { useAppDispatch } from '../../../hooks/redux'

import { openFormAction } from '../../../store/reducers/openFormReducer/openFormSlice'

import style from './Login.module.scss'

const Login: React.FC = () => {
	const dispatch = useAppDispatch()

	const openForm = () => {
		dispatch(openFormAction.changeStateForm(true))
		dispatch(openFormAction.changeFormButton('login'))
	}

	return (
		<div className={style.wrapper}>
			<div className={style.login_form}>
				<button type="button" onClick={openForm}>
					<p>Войти</p>
				</button>
			</div>
		</div>
	)
}

export default Login
