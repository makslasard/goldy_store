import { combineReducers } from 'redux'
import { articlesApi } from '../../services/api/articles/serviceArticles'
import { basketApi } from '../../services/api/basket/serviceBasket'
import { catalogFilterApi } from '../../services/api/catalogFilters/serviceCatalogFilters'
import { mainBannerApi } from '../../services/api/mainBanner/serviceMainBanner'
import { navigateMenuApi } from '../../services/api/navigateMenu/serviceNavigateMenu'
import { popularCategoryApi } from '../../services/api/popularCategory/servicePopularCategory'
import { productDayApi } from '../../services/api/productDay/serviceProductDay'
import { salesBannersApi } from '../../services/api/sales/salesBanners/serviceSalesBanners'
import { salesCardsApi } from '../../services/api/sales/salesCards/serviceSalesCards'
import { salesTabsApi } from '../../services/api/sales/salesTabs/serviceSalesTabs'
import { selectCityApi } from '../../services/api/selectCity/serviceSelectCity'
import { usersDataApi } from '../../services/api/usersData/serviceUserData'

export const rootReducer = combineReducers({
	[articlesApi.reducerPath]: articlesApi.reducer,
	[basketApi.reducerPath]: basketApi.reducer,
	[catalogFilterApi.reducerPath]: catalogFilterApi.reducer,
	[mainBannerApi.reducerPath]: mainBannerApi.reducer,
	[navigateMenuApi.reducerPath]: navigateMenuApi.reducer,
	[popularCategoryApi.reducerPath]: popularCategoryApi.reducer,
	[productDayApi.reducerPath]: productDayApi.reducer,
	[salesBannersApi.reducerPath]: salesBannersApi.reducer,
	[salesCardsApi.reducerPath]: salesCardsApi.reducer,
	[salesTabsApi.reducerPath]: salesTabsApi.reducer,
	[selectCityApi.reducerPath]: selectCityApi.reducer,
	[usersDataApi.reducerPath]: usersDataApi.reducer,
})
