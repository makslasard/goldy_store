import { IBasketData } from '../basket/basket.types'

export interface IUserData {
	name: string
	password: string
	basket?: IBasketData[]
}
