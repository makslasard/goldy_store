import React from 'react'
// eslint-disable-next-line import/no-cycle
import HomePage from '../pages/HomePage/HomePage'
import BasketPage from '../pages/BasketPage/BasketPage'
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage'
// eslint-disable-next-line import/no-cycle
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import StocksPage from '../pages/Stocks/StocksPage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'
import SalesPage from '../pages/SalesPage/SalesPage'
import SaleArticlePage from '../pages/SalesPage/SaleArticlePage/SaleArticlePage'
import BrandsPage from '../pages/BrandsPage/BrandsPage'
import ShopsPage from '../pages/ShopsPage/ShopsPage'
import AboutUs from '../pages/AboutUs/AboutUs'
import DeliveryAndPayment from '../pages/DeliveryAndPayment/DeliveryAndPayment'
import ComparePage from '../pages/ComparePage/ComparePage'
import ArticlePage from '../pages/ArticlesPage/ArticlePage/ArticlePage'

export enum RoutersNames {
	HOME = '/',
	BASKET = '/basket',
	ARTICLES = '/articles',
	ARTICLE = '/articles/:id',
	CATALOG = '/catalog',
	FAVOURITES = '/favourites',
	PRODUCT = '/product',
	SALES = '/sales',
	SALE_ARTICLE = '/sales/:id',
	STOCKS = '/stocks',
	USER_PROFILE = '/user_profile',
	BRANDS = '/brands',
	SHOPS = '/shops',
	ABOUT_US = '/about_us',
	DELIVER_AND_PAYMENT = '/delivery_and_payment',
	COMPARE = '/compare',
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
	{ path: RoutersNames.BRANDS, component: <BrandsPage /> },
	{ path: RoutersNames.SHOPS, component: <ShopsPage /> },
	{ path: RoutersNames.ABOUT_US, component: <AboutUs /> },
	{ path: RoutersNames.DELIVER_AND_PAYMENT, component: <DeliveryAndPayment /> },
	{ path: RoutersNames.COMPARE, component: <ComparePage /> },
	{ path: RoutersNames.ARTICLE, component: <ArticlePage /> },
]
