import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorization } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from 'components/Button';
import { Box } from 'components/Box';
import { Form, Label, Input } from './StyledRegisterForm';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleAuthorization = event => {
    event.preventDefault();

    dispatch(
      authorization({
        name,
        email,
        password,
      })
    );
  };

  const handleChangeInputValue = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const clearInputValue = name === '' || email === '' || password === '';

  return (
    <Form onSubmit={handleAuthorization}>
      <Label htmlFor="nameId">
        Username
        <Input
          id="nameId"
          type="text"
          name="name"
          value={name}
          required
          placeholder=" "
          onChange={handleChangeInputValue}
        />
      </Label>

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
        <Button disabled={clearInputValue || isLoading}>Authorization</Button>
      </Box>
    </Form>
  );
};
