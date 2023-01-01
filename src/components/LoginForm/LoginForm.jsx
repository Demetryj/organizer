import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { Form, Label, Input } from './StyledLoginForm';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleLogin = event => {
    event.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  const handleChangeInputValue = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const clearInputValue = email === '' || password === '';

  return (
    <Form onSubmit={handleLogin}>
      <Label htmlFor="emailId">
        Email
        <Input
          id="emailId"
          type="email"
          name="email"
          value={email}
          required
          placeholder=" "
          onChange={handleChangeInputValue}
        />
      </Label>

      <Label htmlFor="passwordId">
        Password
        <Input
          id="passwordId"
          type="password"
          name="password"
          value={password}
          required
          placeholder=" "
          onChange={handleChangeInputValue}
        />
      </Label>

      <Box mx="auto" as="div">
        <Button disabled={clearInputValue || isLoading}>Login</Button>
      </Box>
    </Form>
  );
};
