export interface ICatalogFilters {
	id: number
	name: string
	category: string
}

export interface ICatalogFiltersProps {
	filterOptions: ICatalogFilters[]
}
