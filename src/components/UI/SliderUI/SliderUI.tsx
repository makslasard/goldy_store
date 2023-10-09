import React from 'react'
import { Carousel } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

import ButtonActiveUI from '../ButtonUI/ButtonActiveUI/ButtonActiveUI'

import { getImgApi } from '../../../services/api/getImg/serviceGetImg'

import style from './SliderUI.module.scss'

const SliderUI: React.FC = () => {
	const { data: mainBanner } = getImgApi.useGetAllImgMainBannerQuery('mainBanner')

	return (
		<div className={style.wrapper}>
			<Carousel autoplay className={style.carousel}>
				<div>
					<div className={style.arrow}>
						<button type="button" className={style.left_arrow}>
							<ArrowLeftOutlined />
						</button>
						<button type="button" className={style.right_arrow}>
							<ArrowRightOutlined />
						</button>
					</div>
					<div className={style.slide}>
						<div className={style.slide_text}>
							<span className={style.subtitle}>Скидки до 60%</span>
							<h2 className={style.title}>На бриллианты</h2>
							<ButtonActiveUI>Подробнее</ButtonActiveUI>
						</div>
						<div className={style.slide_img}>
							{mainBanner?.map((item) => (
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
