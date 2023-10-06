import React from 'react'
import { Result } from 'antd'

import ButtonUI from '../../ButtonUI/ButtonUI'

import style from './Error404UI.module.scss'

const Error404UI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="404"
				title="404"
				subTitle="К сожалению, страница, которую вы посетили, не существует."
				extra={<ButtonUI>Вернуться на главную</ButtonUI>}
			/>
		</div>
	)
}

export default Error404UI
