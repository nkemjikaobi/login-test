import Login from '../Login';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LoginService } from '../LoginService'

let getByTestId: any;
const loginServiceSpy = jest.spyOn(LoginService.prototype, 'LoginUser');

beforeEach(() => {
	const component = render(<Login />);
	getByTestId = component.getByTestId;
});

test('change value of username works correctly', () => {
	const username = getByTestId('username');

	fireEvent.change(username, {
		target: {
			value: 'nkemjika',
		},
	});

	expect(username.value).toBe('nkemjika');
});

test('change value of password works correctly', () => {
	const password = getByTestId('password');

	fireEvent.change(password, {
		target: {
			value: 'melancholy23',
		},
	});

	expect(password.value).toBe('melancholy23');
});

test('check that info message is correct', () => {
	const info = getByTestId('info');

	expect(info.textContent).toBe('Not logged in');
});

test('username and password is not empty when button is clicked', () => {
	const loginButton = getByTestId('login-btn');
	const username = getByTestId('username');
	const password = getByTestId('password');

	fireEvent.change(username, {
		target: {
			value: 'nkemjika',
		},
	});

	fireEvent.change(password, {
		target: {
			value: 'melancholy23',
		},
	});

	fireEvent.click(loginButton);

	expect(username.value).toBe('nkemjika');
	expect(password.value).toBe('melancholy23');
});

test('return response when the user fills the form and clicks button', () => {
	const loginButton = getByTestId('login-btn');
	const username = getByTestId('username');
	const password = getByTestId('password');

	fireEvent.change(username, {
		target: {
			value: 'nkemjika',
		},
	});

	fireEvent.change(password, {
		target: {
			value: 'melancholy23',
		},
	});

	fireEvent.click(loginButton);

	expect(username.value).toBe('nkemjika');
	expect(password.value).toBe('melancholy23');

	//comes from the response body...Response is console logged.
    //To make this test fail, I changed one of the expected results 'nkemjika' to 'nkemjikaa'
	expect(loginServiceSpy).toBeCalledWith('nkemjikaa', 'melancholy23');
});
