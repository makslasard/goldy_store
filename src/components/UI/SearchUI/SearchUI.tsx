import React from 'react'
import { AutoComplete, Input } from 'antd'

import style from './SearchUI.module.scss'

const SearchUI: React.FC = () => {
	const onSelect = (value: string) => {
		console.log('onSelect', value)
	}

	return (
		<AutoComplete
			popupMatchSelectWidth={252}
			className={style.auto_complete}
			onSelect={onSelect}
			size="large">
			<Input.Search size="large" placeholder="Поиск..." className={style.input} />
		</AutoComplete>
	)
}

export default SearchUI
