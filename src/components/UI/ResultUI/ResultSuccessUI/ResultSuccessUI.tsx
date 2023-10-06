import React from 'react'
import { Result } from 'antd'
import ButtonUI from '../../ButtonUI/ButtonUI'

import style from './ResultSuccessUI.module.scss'

const ResultSuccessUI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="success"
				title="Заказ успешно сформирован"
				subTitle="Все необходима информация будет отображаться в личном кабинете"
				extra={[<ButtonUI>На главную</ButtonUI>]}
			/>
		</div>
	)
}

export default ResultSuccessUI
