import React from 'react'

import { Button, Checkbox, Form, Input, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import style from './LoginFormUI.module.scss'
import { usersDataApi } from '../../../../services/api/usersData/serviceUserData'

const LoginFormUI: React.FC = () => {
	const { data: userData } = usersDataApi.useGetAllUsersDataQuery('')
	const [messageApi, contextHolder] = message.useMessage()

	const onFinish = (values: any) => {
		messageApi.open({
			type: 'success',
			content: 'Вы успешно вошли!',
			duration: 3,
		})
	}

	return (
		<>
			{contextHolder}
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
						<div>
							<a className="login-form-forgot" href="/">
								Забыли пароль?
							</a>
						</div>
					</div>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className={style.login_button}>
						Войти
					</Button>
					Или <a href="/">зарегистрироваться сейчас!</a>
				</Form.Item>
			</Form>
		</>
	)
}

export default LoginFormUI
