import React from 'react'
import { Result } from 'antd'

import ButtonActiveUI from '../../ButtonUI/ButtonActiveUI/ButtonActiveUI'

import style from './Error403UI.module.scss'

const Error403UI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="403"
				title="403"
				subTitle="Извините, вы не авторизованы для доступа к этой странице."
				extra={<ButtonActiveUI>Вернуться на главную</ButtonActiveUI>}
			/>
		</div>
	)
}

export default Error403UI
