import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import { useAppDispatch } from '../../../../hooks/redux'

import { openFormAction } from '../../../../store/reducers/openFormReducer/openFormSlice'

import style from './RegistrationFormUI.module.scss'
import { IAuthDataUsers } from '../../../../types/auth/auth.types'
import { authActions } from '../../../../store/reducers/authReducer/authSlice'

const RegistrationFormUI: React.FC = () => {
	const dispatch = useAppDispatch()
	const [messageApi, contextHolder] = message.useMessage()

	const onFinish = (values: IAuthDataUsers) => {
		dispatch(authActions.login(values))

		messageApi.open({
			type: 'success',
			content: 'Вы успешно зарегистрировались!',
			duration: 3,
		})
		dispatch(openFormAction.changeStateForm(false))
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
					</div>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className={style.login_button}>
						Зарегистрироваться
					</Button>
					Или
					<button
						type="button"
						className={style.button_registration}
						onClick={() => dispatch(openFormAction.changeFormButton('login'))}>
						Войти сейчас!
					</button>
				</Form.Item>
			</Form>
		</>
	)
}

export default RegistrationFormUI
