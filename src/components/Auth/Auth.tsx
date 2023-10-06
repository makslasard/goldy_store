import React from 'react'

import style from './Auth.module.scss'
import Login from './Login/Login'
import Registration from './Registration/Registration'

const Auth: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div>
				<Login />
			</div>
			<div className={style.separator} />
			<div>
				<Registration />
			</div>
		</div>
	)
}

export default Auth
