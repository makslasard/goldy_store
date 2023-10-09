import React from 'react'
import { Result } from 'antd'
import ButtonActiveUI from '../../ButtonUI/ButtonActiveUI/ButtonActiveUI'

import style from './ResultSuccessUI.module.scss'

const ResultSuccessUI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="success"
				title="Заказ успешно сформирован"
				subTitle="Все необходима информация будет отображаться в личном кабинете"
				extra={[<ButtonActiveUI>На главную</ButtonActiveUI>]}
			/>
		</div>
	)
}

export default ResultSuccessUI
