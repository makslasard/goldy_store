import React from 'react'
import { Button, Space } from 'antd'

import style from './ButtonActiveUI.module.scss'

const ButtonActiveUI: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className={style.wrapper}>
			<Space wrap>
				<Button className={style.button}>
					<span>{children}</span>
				</Button>
			</Space>
		</div>
	)
}

export default ButtonActiveUI
