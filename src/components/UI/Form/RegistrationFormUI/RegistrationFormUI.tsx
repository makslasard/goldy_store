import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import style from './RegistrationFormUI.module.scss'

const RegistrationFormUI: React.FC = () => {
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values)
	}

	return (
		<Form
			name="normal_login"
			className={style.form}
			initialValues={{ remember: true }}
			onFinish={onFinish}>
			<Form.Item
				name="username"
				rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Имя пользователя"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Пароль"
				/>
			</Form.Item>
			<Form.Item>
				<div className={style.remember}>
					<div>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Запомнить меня</Checkbox>
						</Form.Item>
					</div>
				</div>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className={style.login_button}>
					Зарегистрироваться
				</Button>
				Или <a href="/">войти сейчас!</a>
			</Form.Item>
		</Form>
	)
}

export default RegistrationFormUI
