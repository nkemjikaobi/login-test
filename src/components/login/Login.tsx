import React, { useState } from 'react';
import { LoginService } from './LoginService';

const Login = () => {
	const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState('Not logged in');

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		console.log('Login Attempted');
		console.log(username);
		console.log(password);

		const loginService: LoginService = new LoginService();

        const response = await loginService.LoginUser(username, password);
        if (response) {
            setInfo('LogIn Successful')
        }
	};

	return (
		<div className='container'>
			<div className='form-container'>
				<span>Login to the dashboard</span>
				<form action=''>
					<div className='form-group'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							data-testid='username'
							name='username'
							placeholder='Enter Username'
							value={username}
							onChange={e => {
								setUserName(e.target.value);
							}}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							data-testid='password'
							placeholder=' ********'
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
                    </div>
                    <div data-testid='info'>{ info }</div>
					<div>
						<input
							type='submit'
							data-testid='login-btn'
							className='btn btn-block'
							value='Login'
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
