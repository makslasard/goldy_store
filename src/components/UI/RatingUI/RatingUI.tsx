import React from 'react'

import { Rate } from 'antd'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { currentRatingAction } from '../../../store/reducers/currentRating/currentRatingSlice'

import style from './RatingUI.module.scss'

const RatingUI: React.FC = () => {
	const currentRating = useAppSelector((state) => state.currentRating.currentRating)
	const dispatch = useAppDispatch()

	return (
		<div className={style.wrapper}>
			<Rate
				allowHalf
				onChange={(rating) => dispatch(currentRatingAction.changeCurrentRating(rating))}
			/>
			<span className="ant-rate-text">{currentRating}</span>
		</div>
	)
}

export default RatingUI
