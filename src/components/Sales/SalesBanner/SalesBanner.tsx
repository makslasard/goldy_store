import React from 'react'

import { salesBannersApi } from '../../../services/api/sales/salesBanners/serviceSalesBanners'

import style from './SalesBanner.module.scss'

const SalesBanner: React.FC = () => {
	const { data: banners } = salesBannersApi.useGetAllSalesBannersQuery('')

	return (
		<div className={style.wrapper}>
			<div className={style.wrapper_banner}>
				{banners &&
					banners.map((item) => (
						<div key={item.id} className={style.banner}>
							<div>
								<div className={style.title}>
									<span>Скидки</span>
									<h4>{item.name}</h4>
								</div>
								<div
									className={style.sale}
									style={{ backgroundColor: `${item.color}` }}>
									<div>
										До -<span>{item.sale}%</span>
									</div>
								</div>
							</div>
							<div>
								<div className={style.img}>
									<img src={item.img} alt={item.name} />
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default SalesBanner
