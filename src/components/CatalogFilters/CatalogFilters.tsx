import React from 'react'

import LoaderUI from '../UI/LoaderUI/LoaderUI'
import DropdownFiltersUI from '../UI/DropdownFiltersUI/DropdownFiltersUI'

import { catalogFilterApi } from '../../services/api/catalogFilters/serviceCatalogFilters'

import style from './CatalogFilters.module.scss'

const CatalogFilters: React.FC = () => {
	const {
		data: catalogFilters,
		isLoading,
		isError,
	} = catalogFilterApi.useGetAllCatalogFiltersQuery('')

	return (
		<div className={style.wrapper}>
			{isLoading && <LoaderUI />}
			{isError && <h1>Произошла ошибка загрузки...</h1>}
			{catalogFilters && <DropdownFiltersUI filterOptions={catalogFilters} />}
		</div>
	)
}

export default CatalogFilters
