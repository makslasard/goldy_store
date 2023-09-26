export enum SalesTabsEnum {
	RINGS = 'Кольца',
	EARRINGS = 'Серьги',
	BRACELETS = 'Браслеты',
	WATCH = 'Часы',
}

export interface ISalesBanner {
	id: number
	img: string
	name: string
	sale: number
}
