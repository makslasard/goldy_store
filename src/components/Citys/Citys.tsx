import React from 'react'
import DropdownCityUI from '../UI/DropdownCityUI/DropdownCityUI'

import style from './Citys.module.scss'

const Citys: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.citys}>
				<DropdownCityUI />
			</div>
		</div>
	)
}

export default Citys
