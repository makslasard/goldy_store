export interface IAuthDataUsers {
	username: string
	password: string
	remember?: boolean
}

export interface IAuthState {
	isAuth: boolean
	authDateUsers: IAuthDataUsers[]
}
