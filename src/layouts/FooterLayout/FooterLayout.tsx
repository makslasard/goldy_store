import React from 'react'

import style from './FooterLayout.module.scss'

const FooterLayout: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<div>
				<h4>Покупателям</h4>
				<div>
					<p>Доставка</p>
				</div>
				<div>
					<p>Оплата</p>
				</div>
				<div>
					<p>Рассрочка и кредит</p>
				</div>
				<div>
					<p>Возврат и обмен</p>
				</div>
				<div>
					<p>Программа лояльности</p>
				</div>
				<div>
					<p>Частые вопросы</p>
				</div>
				<div>
					<p>Услуги</p>
				</div>
				<div>
					<p>Контакты</p>
				</div>
				<div>
					<p>Карта сайта</p>
				</div>
			</div>
			<div>
				<h4>О компании</h4>
				<div>
					<p>Новости компании</p>
				</div>
				<div>
					<p>Журнал GOLDY STORE</p>
				</div>
				<div>
					<p>Карьера в GOLDY STORE</p>
				</div>
				<div>
					<p>Франчайзинг</p>
				</div>
				<div>
					<p>Социальные проекты</p>
				</div>
				<div>
					<p>Займы до зарплаты</p>
				</div>
			</div>
			<div>
				<h4>Правовая информация</h4>
				<div>
					<p>Общая правовая информация</p>
				</div>
				<div>
					<p>Политика конфиденциальности</p>
				</div>
				<div>
					<p>Публичная оферта</p>
				</div>
				<div>
					<p>Правила размещения отзывов</p>
				</div>
			</div>
		</div>
	)
}

export default FooterLayout
