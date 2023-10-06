import React from 'react'
import { Result } from 'antd'
import ButtonUI from '../../ButtonUI/ButtonUI'

import style from './ResultErrorUI.module.scss'

const ResultErrorUI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="error"
				title="Оплата не удалась"
				subTitle="Банк отказал в проведении опецарии в связи с недостатком средств"
				extra={[<ButtonUI>Попробовать снова</ButtonUI>]}
			/>
		</div>
	)
}

export default ResultErrorUI
