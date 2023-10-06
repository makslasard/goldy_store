import React from 'react'

import style from './MainBanner.module.scss'
import SliderUI from '../UI/SliderUI/SliderUI'

const MainBanner: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<SliderUI />
		</div>
	)
}

export default MainBanner
