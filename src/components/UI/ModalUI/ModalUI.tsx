import React, { useState } from 'react'
import { Modal } from 'antd'
import LoginFormUI from '../Form/LoginFormUI/LoginFormUI'

import style from './ModalUI.module.scss'

const ModalUI: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleClose = () => {
		setIsModalOpen(false)
	}

	return (
		<div>
			<Modal open={isModalOpen} footer={null} className={style.modal} onCancel={handleClose}>
				<div className={style.title}>Войти</div>
				<LoginFormUI />
			</Modal>
		</div>
	)
}

export default ModalUI
