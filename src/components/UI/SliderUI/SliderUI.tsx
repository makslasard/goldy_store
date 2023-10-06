import React from 'react'
import { Carousel } from 'antd'

import ButtonUI from '../ButtonUI/ButtonUI'

import style from './SliderUI.module.scss'
import { getImgApi } from '../../../services/api/getImg/serviceGetImg'

const SliderUI: React.FC = () => {
	const { data: mainBanner } = getImgApi.useGetAllImgMainBannerQuery('mainBanner')

	return (
		<div className={style.wrapper}>
			<Carousel autoplay className={style.carousel}>
				<div>
					<div className={style.slide}>
						<div className={style.slide_text}>
							<span className={style.subtitle}>Скидки до 60%</span>
							<h2 className={style.title}>На бриллианты</h2>
							<ButtonUI>Подробнее</ButtonUI>
						</div>
						<div className={style.slide_img}>
							{mainBanner &&
								mainBanner.map((item) => (
									<img key={item.id} src={item.img} alt={item.title} />
								))}
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	)
}

export default SliderUI
