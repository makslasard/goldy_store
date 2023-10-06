import React from 'react'

import LoginFormUI from './LoginFormUI/LoginFormUI'

import style from './FormUI.module.scss'

const FormUI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<LoginFormUI />
		</div>
	)
}

export default FormUI
