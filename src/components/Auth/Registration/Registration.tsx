import React from 'react'

import { useAppDispatch } from '../../../hooks/redux'

import { openFormAction } from '../../../store/reducers/openFormReducer/openFormSlice'

import style from './Registration.module.scss'

const Registration: React.FC = () => {
	const dispatch = useAppDispatch()

	const openForm = () => {
		dispatch(openFormAction.changeStateForm(true))
		dispatch(openFormAction.changeFormButton('registration'))
	}

	return (
		<div className={style.wrapper}>
			<div className={style.registration_form}>
				<button type="button" onClick={openForm}>
					<p>Регистрация</p>
				</button>
			</div>
		</div>
	)
}

export default Registration
