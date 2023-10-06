import React from 'react'
import { Result } from 'antd'

import ButtonUI from '../../ButtonUI/ButtonUI'

import style from './Error403UI.module.scss'

const Error403UI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="403"
				title="403"
				subTitle="Извините, вы не авторизованы для доступа к этой странице."
				extra={<ButtonUI>Вернуться на главную</ButtonUI>}
			/>
		</div>
	)
}

export default Error403UI
