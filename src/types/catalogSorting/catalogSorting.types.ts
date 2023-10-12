export interface ICatalogSorting {
	id: number
	name: string
	sortOption: string
}

export interface ICatalogSortingProps {
	optionSort: ICatalogSorting[]
}
