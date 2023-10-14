import React from 'react'
import { Carousel } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
// eslint-disable-next-line import/no-cycle
import { RoutersNames } from '../../../routers/routers'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { IMainBannerProps } from '../../../types/mainBanner/mainBanner.types'
import { currentBannerAction } from '../../../store/reducers/currentBannerReducer/currentBannerSlice'

import style from './SliderUI.module.scss'

const SliderUI: React.FC<IMainBannerProps> = ({ id, img, title, subtitle }) => {
	const currentBanner = useAppSelector((state) => state.currentBanner.currentBanner)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	return (
		<div className={style.wrapper}>
			<Carousel className={style.carousel}>
				<div>
					<div className={style.arrow}>
						<button
							type="button"
							className={style.left_arrow}
							onClick={() =>
								dispatch(currentBannerAction.changeCurrentBanner(currentBanner - 1))
							}>
							<ArrowLeftOutlined />
						</button>
						<button
							type="button"
							className={style.right_arrow}
							onClick={() =>
								dispatch(currentBannerAction.changeCurrentBanner(currentBanner + 1))
							}>
							<ArrowRightOutlined />
						</button>
					</div>
					<div className={style.slide}>
						<div className={style.slide_text}>
							<span className={style.subtitle}>{subtitle}</span>
							<h2 className={style.title}>{title}</h2>
							<button type="button" onClick={() => navigate(RoutersNames.SALES)}>
								Подробнее
							</button>
						</div>
						<div className={style.slide_img}>
							<img key={id} src={img} alt={title} />
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	)
}

export default SliderUI
