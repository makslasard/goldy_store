import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'

import RatingUI from '../../components/UI/RatingUI/RatingUI'
import LoaderUI from '../../components/UI/LoaderUI/LoaderUI'

import { salesCardsApi } from '../../services/api/sales/salesCards/serviceSalesCards'

import style from './BasketPage.module.scss'

const BasketPage: React.FC = () => {
	const { data: basketProduct, isLoading, isError } = salesCardsApi.useGetAllSalesCardsQuery('')
	return (
		<div className={style.wrapper}>
			<div className={style.title}>
				<div>
					<h2>Корзина товаров</h2>
				</div>
				<div className={style.delete_all_products}>
					<DeleteOutlined />
					<p>Очистить корзину</p>
				</div>
			</div>
			<div className={style.wrapper_product}>
				{isLoading && <LoaderUI />}
				{isError && <h1>Произошла ошибка загрузки...</h1>}
				{basketProduct?.map((product) => (
					<div key={product.id} className={style.product}>
						<div className={style.product_img}>
							<img src={product.img} alt={product.name} />
						</div>
						<div className={style.product_description}>
							<div className={style.product_title}>
								<h4>Золотое гладкое обручальное кольцо 3 мм</h4>
							</div>
							<div className={style.product_info}>
								<div className={style.wrapper_info}>
									<div className={style.product_size}>
										<p>
											Размер:
											<span>{product.size}</span>
										</p>
									</div>
									<div className={style.product_in_stock}>
										<p>
											В наличии:
											<span>{product.quantity}</span>
											шт
										</p>
									</div>
								</div>
								<div className={style.sales}>
									<div className={style.sales_text}>
										<p>Скидка:</p>
									</div>
									<div className={style.sales_tags}>
										<span>-{product.sales}%</span>
									</div>
								</div>
							</div>
							<div className={style.rating}>
								<RatingUI />
							</div>
						</div>
						<div className={style.product_buttons}>
							<div className={style.buttons_minus}>
								<button type="button">-</button>
							</div>
							<div className={style.product_quantity}>
								<span>2</span>
							</div>
							<div className={style.buttons_plus}>
								<button type="button">+</button>
							</div>
						</div>
						<div className={style.product_price}>
							<div className={style.oldPrice}>
								<p>
									Старая цена:
									<span>{product.oldPrice} P</span>
								</p>
							</div>
							<div className={style.newPrice}>
								<p>
									от
									<span>{product.newPrice} P</span>
								</p>
							</div>
						</div>
						<div className={style.product_delete_product}>
							<button type="button">
								<p>&times;</p>
							</button>
						</div>
					</div>
				))}
			</div>
			<div className={style.actions}>
				<div className={style.total_price}>
					<p>
						Сумма заказа:<span>900</span>P
					</p>
				</div>
				<div className={style.button_pay}>
					<button type="button">
						<p>Оплатить сейчас</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default BasketPage
