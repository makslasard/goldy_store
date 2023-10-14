import React from 'react'

// eslint-disable-next-line import/no-cycle
import SliderUI from '../UI/SliderUI/SliderUI'

import { mainBannerApi } from '../../services/api/mainBanner/serviceMainBanner'

import { useAppSelector } from '../../hooks/redux'

import style from './MainBanner.module.scss'

const MainBanner: React.FC = () => {
	const { data: mainBannerData } = mainBannerApi.useGetAllMainBannerQuery('')
	const currentBanner = useAppSelector((state) => state.currentBanner.currentBanner)

	return (
		<div className={style.wrapper}>
			{mainBannerData?.map((banner) =>
				currentBanner === banner.id ? (
					<SliderUI
						key={banner.id}
						id={banner.id}
						img={banner.img}
						subtitle={banner.subtitle}
						title={banner.title}
					/>
				) : (
					''
				)
			)}
		</div>
	)
}

export default MainBanner
