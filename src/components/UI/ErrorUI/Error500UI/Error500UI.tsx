import React from 'react'
import { Result } from 'antd'

import ButtonUI from '../../ButtonUI/ButtonUI'

import style from './Error500UI.module.scss'

const Error500UI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="500"
				title="500"
				subTitle="Извините, что-то пошло не так."
				extra={<ButtonUI>Вернуться на главную</ButtonUI>}
			/>
		</div>
	)
}

export default Error500UI
