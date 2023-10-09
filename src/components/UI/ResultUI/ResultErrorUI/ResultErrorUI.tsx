import React from 'react'
import { Result } from 'antd'
import ButtonActiveUI from '../../ButtonUI/ButtonActiveUI/ButtonActiveUI'

import style from './ResultErrorUI.module.scss'

const ResultErrorUI: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<Result
				status="error"
				title="Оплата не удалась"
				subTitle="Банк отказал в проведении опецарии в связи с недостатком средств"
				extra={[<ButtonActiveUI>Попробовать снова</ButtonActiveUI>]}
			/>
		</div>
	)
}

export default ResultErrorUI
