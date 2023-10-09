import React from 'react'

import ButtonActiveUI from '../../components/UI/ButtonUI/ButtonActiveUI/ButtonActiveUI'

import { getImgApi } from '../../services/api/getImg/serviceGetImg'

import style from './BasketPage.module.scss'

const BasketPage: React.FC = () => {
	const { data: notFoundImg } = getImgApi.useGetAllImgNotFoundQuery('not-found')

	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<h2>Корзина пустая</h2>
			</div>
			<div className={style.subtitle}>
				<span>Вероятней всего, вы не заказывали ещё украшения.</span>
				<span>Для того, чтобы заказать украшение, перейди на главную страницу.</span>
			</div>
			<div className={style.img}>
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

export default BasketPage
