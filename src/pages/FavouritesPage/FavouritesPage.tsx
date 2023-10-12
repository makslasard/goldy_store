import React from 'react'

import LoaderUI from '../../components/UI/LoaderUI/LoaderUI'
import ButtonActiveUI from '../../components/UI/ButtonUI/ButtonActiveUI/ButtonActiveUI'

import { getImgApi } from '../../services/api/getImg/serviceGetImg'

import style from './FavouritesPage.module.scss'

const FavouritesPage: React.FC = () => {
	const {
		data: notFoundImg,
		isLoading,
		isError,
	} = getImgApi.useGetAllImgNotFoundQuery('not-found')

	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<h2>Избранных товаров нет</h2>
			</div>
			<div className={style.subtitle}>
				<span>Вероятней всего, вы не добавили ничего в избранное.</span>
				<span>Для того, чтобы добавить в избранное, перейди на главную страницу.</span>
			</div>
			<div className={style.img}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{notFoundImg?.map((imageUrl) => (
					<div>
						<img src={imageUrl.img} alt={imageUrl.title} />
					</div>
				))}
			</div>
			<div className={style.button}>
				<ButtonActiveUI>Вернуться на главную</ButtonActiveUI>
			</div>
		</div>
	)
}

export default FavouritesPage
