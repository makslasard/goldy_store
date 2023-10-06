export interface IProduct {
	id: number
	img: string
	name: string
	size: number
	in_stock: boolean
	stock: number
	// reviews: IProductReviews
	sales: number
	quantity: number
	oldPrice: number
	newPrice: number
	popular: number
	rating: number
	colors: string[]
}

interface IProductReviews {
	img: string
	name: string
	product: string
	review: string
}
