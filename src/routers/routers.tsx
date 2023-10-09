import React from 'react'
import HomePage from '../pages/HomePage/HomePage'
import BasketPage from '../pages/BasketPage/BasketPage'
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import StocksPage from '../pages/Stocks/StocksPage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'
import SalesPage from '../pages/SalesPage/SalesPage'
import SaleArticlePage from '../pages/SalesPage/SaleArticlePage/SaleArticlePage'

export enum RoutersNames {
	HOME = '/',
	BASKET = '/basket',
	ARTICLES = '/articles',
	CATALOG = '/catalog',
	FAVOURITES = '/favourites',
	PRODUCT = '/product',
	SALES = '/sales',
	SALE_ARTICLE = '/sales/:id',
	STOCKS = '/stocks',
	USER_PROFILE = '/user_profile',
}

export const privateRoutes = [
	{ path: RoutersNames.HOME, component: <HomePage /> },
	{ path: RoutersNames.USER_PROFILE, component: <UserProfilePage /> },
]
export const publicRoutes = [
	{ path: RoutersNames.HOME, component: <HomePage /> },
	{ path: RoutersNames.ARTICLES, component: <ArticlesPage /> },
	{ path: RoutersNames.CATALOG, component: <CatalogPage /> },
	{ path: RoutersNames.FAVOURITES, component: <FavouritesPage /> },
	{ path: RoutersNames.PRODUCT, component: <ProductPage /> },
	{ path: RoutersNames.STOCKS, component: <StocksPage /> },
	{ path: RoutersNames.BASKET, component: <BasketPage /> },
	{ path: RoutersNames.SALES, component: <SalesPage /> },
	{ path: RoutersNames.SALE_ARTICLE, component: <SaleArticlePage /> },
]
