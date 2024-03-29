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
import { tabsCatalogApi } from '../../services/api/tabsCatalog/serviceTabsCatalog'
import { getImgApi } from '../../services/api/getImg/serviceGetImg'
import { productDayDescriptionApi } from '../../services/api/productDay/serviceProductDayDescription'
import { salesListPageApi } from '../../services/api/sales/salesListPage/salesListPage'
import { saleArticleApi } from '../../services/api/sales/saleArticle/serviceSaleArticle'
import { catalogSortingApi } from '../../services/api/catalogSorting/serviceCatalogSorting'
import { openFormReducers } from './openFormReducer/openFormSlice'
import { authReducer } from './authReducer/authSlice'
import { currentBannerReducers } from './currentBannerReducer/currentBannerSlice'
import { currentCategoryReducers } from './currentCategory/currentCategorySlice'
import { currentSizeReducers } from './currentSize/currentSizeSlice'
import { currentColorReducers } from './currentColor/currentColorSlice'
import { currentRatingReducers } from './currentRating/currentRatingSlice'
import { productCatalogApi } from '../../services/api/productCatalog/serviceProductCatalog'

export const rootReducer = combineReducers({
	openForm: openFormReducers,
	authUsers: authReducer,
	currentBanner: currentBannerReducers,
	currentCategory: currentCategoryReducers,
	currentSize: currentSizeReducers,
	currentColor: currentColorReducers,
	currentRating: currentRatingReducers,
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
	[tabsCatalogApi.reducerPath]: tabsCatalogApi.reducer,
	[getImgApi.reducerPath]: getImgApi.reducer,
	[productDayDescriptionApi.reducerPath]: productDayDescriptionApi.reducer,
	[salesListPageApi.reducerPath]: salesListPageApi.reducer,
	[saleArticleApi.reducerPath]: saleArticleApi.reducer,
	[catalogSortingApi.reducerPath]: catalogSortingApi.reducer,
	[productCatalogApi.reducerPath]: productCatalogApi.reducer,
})
