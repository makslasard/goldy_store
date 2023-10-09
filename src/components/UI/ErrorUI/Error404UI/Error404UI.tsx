import React from 'react'
import { Result } from 'antd'

import ButtonActiveUI from '../../ButtonUI/ButtonActiveUI/ButtonActiveUI'

import style from './Error404UI.module.scss'

const Error404UI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="404"
				title="404"
				subTitle="К сожалению, страница, которую вы посетили, не существует."
				extra={<ButtonActiveUI>Вернуться на главную</ButtonActiveUI>}
			/>
		</div>
	)
}

export default Error404UI
