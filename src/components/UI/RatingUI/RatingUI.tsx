import React, { useState } from 'react'

import { Rate } from 'antd'

import style from './RatingUI.module.scss'

const RatingUI: React.FC = () => {
	const [ratingValue, setRatingValue] = useState(0)

	return (
		<div className={style.wrapper}>
			<Rate
				allowHalf
				defaultValue={ratingValue}
				onChange={(rating) => setRatingValue(rating)}
			/>
			<span className="ant-rate-text">{ratingValue}</span>
		</div>
	)
}

export default RatingUI
