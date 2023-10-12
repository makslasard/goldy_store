import React from 'react'

import LoaderUI from '../UI/LoaderUI/LoaderUI'
import DropdownUI from '../UI/DropdownCityUI/DropdownCityUI'

import { selectCityApi } from '../../services/api/selectCity/serviceSelectCity'

import style from './Citys.module.scss'

const Citys: React.FC = () => {
	const { data: citys, isLoading, isError } = selectCityApi.useGetAllSelectCityQuery('')
	return (
		<div className={style.wrapper}>
			<div className={style.citys}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{citys && <DropdownUI citys={citys} />}
			</div>
		</div>
	)
}

export default Citys
