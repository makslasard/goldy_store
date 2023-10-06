import React from 'react'

import style from './Search.module.scss'
import SearchUI from '../UI/SearchUI/SearchUI'

const Search: React.FC = () => {
	return (
		<div className={style.wrapper}>
			<SearchUI />
		</div>
	)
}

export default Search
