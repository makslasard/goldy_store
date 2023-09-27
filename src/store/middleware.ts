import { articlesApi } from '../services/api/articles/serviceArticles'
import { basketApi } from '../services/api/basket/serviceBasket'
import { catalogFilterApi } from '../services/api/catalogFilters/serviceCatalogFilters'
import { mainBannerApi } from '../services/api/mainBanner/serviceMainBanner'
import { navigateMenuApi } from '../services/api/navigateMenu/serviceNavigateMenu'
import { popularCategoryApi } from '../services/api/popularCategory/servicePopularCategory'
import { productDayApi } from '../services/api/productDay/serviceProductDay'
import { salesBannersApi } from '../services/api/sales/salesBanners/serviceSalesBanners'
import { salesCardsApi } from '../services/api/sales/salesCards/serviceSalesCards'
import { salesTabsApi } from '../services/api/sales/salesTabs/serviceSalesTabs'
import { selectCityApi } from '../services/api/selectCity/serviceSelectCity'
import { usersDataApi } from '../services/api/usersData/serviceUserData'

export type Middleware =
	| typeof articlesApi.middleware
	| typeof basketApi.middleware
	| typeof catalogFilterApi.middleware
	| typeof mainBannerApi.middleware
	| typeof navigateMenuApi.middleware
	| typeof popularCategoryApi.middleware
	| typeof productDayApi.middleware
	| typeof salesBannersApi.middleware
	| typeof salesCardsApi.middleware
	| typeof salesTabsApi.middleware
	| typeof selectCityApi.middleware
	| typeof usersDataApi.middleware

export const middleware = (getDefaultMiddleware: () => Middleware[]): Middleware[] => {
	return getDefaultMiddleware().concat(
		articlesApi.middleware,
		basketApi.middleware,
		catalogFilterApi.middleware,
		mainBannerApi.middleware,
		navigateMenuApi.middleware,
		popularCategoryApi.middleware,
		productDayApi.middleware,
		salesBannersApi.middleware,
		salesCardsApi.middleware,
		salesTabsApi.middleware,
		selectCityApi.middleware,
		usersDataApi.middleware
	)
}
