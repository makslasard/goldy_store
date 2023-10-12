import React from 'react'

import LoaderUI from '../UI/LoaderUI/LoaderUI'
import DropdownSortingUI from '../UI/DropdownSortingUI/DropdownSortingUI'

import { catalogSortingApi } from '../../services/api/catalogSorting/serviceCatalogSorting'

import style from './CatalogSorting.module.scss'

const CatalogSorting: React.FC = () => {
	const {
		data: catalogSorting,
		isLoading,
		isError,
	} = catalogSortingApi.useGetAllCatalogFiltersQuery('')

	return (
		<div className={style.wrapper}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
			{catalogSorting && <DropdownSortingUI optionSort={catalogSorting} />}
		</div>
	)
}

export default CatalogSorting
