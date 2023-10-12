import React from 'react'
import { Modal } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import LoginFormUI from '../Form/LoginFormUI/LoginFormUI'

import { openFormAction } from '../../../store/reducers/openFormReducer/openFormSlice'

import style from './ModalUI.module.scss'
import RegistrationFormUI from '../Form/RegistrationFormUI/RegistrationFormUI'

const ModalUI: React.FC = () => {
	const formState = useAppSelector((state) => state.openForm.formOpen)
	const nameButton = useAppSelector((state) => state.openForm.nameButton)
	const dispatch = useAppDispatch()

	const handleClose = () => {
		dispatch(openFormAction.changeStateForm(false))
	}

	return (
		<div>
			<Modal open={formState} footer={null} className={style.modal} onCancel={handleClose}>
				{nameButton === 'login' ? (
					<div className={style.title}>Войти</div>
				) : (
					<div className={style.title}>Регистрация</div>
				)}
				{nameButton === 'login' ? <LoginFormUI /> : <RegistrationFormUI />}
			</Modal>
		</div>
	)
}

export default ModalUI
