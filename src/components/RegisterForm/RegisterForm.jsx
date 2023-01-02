import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authorization } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from 'components/Button';
import { Box } from 'components/Box';
import { ErrorMessage } from 'components/ErrorMessage';
import { Form, Label, Input } from './StyledRegisterForm';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const handleAuthorization = data => {
    const { name, email, password } = getValues();

    dispatch(
      authorization({
        name,
        email,
        password,
      })
    );

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleAuthorization)}>
      <Label htmlFor="nameId">
        Username
        <Input
          {...register('name', {
            required: 'Username is required.',
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                'It may contain only letters, apostrophe, dash and spaces.',
            },
            minLength: {
              value: 2,
              message: 'Minimal length is 6 symbols',
            },
            maxLength: {
              value: 36,
              message: 'Maximal length is 36 symbols',
            },
          })}
          id="nameId"
          placeholder=" "
          onChange={() => clearErrors('name')}
        />
        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
      </Label>

      <Label htmlFor="emailId">
        Email
        <Input
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email.',
            },
          })}
          id="emailId"
          type="email"
          placeholder=" "
          onChange={() => clearErrors('email')}
        />
        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
      </Label>

      <Label htmlFor="passwordId">
        Password
        <Input
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 6,
              message: 'Minimal length is 6 symbols',
            },
            maxLength: {
              value: 12,
              message: 'Maximal length is 12 symbols',
            },
          })}
          id="passwordId"
          type="password"
          placeholder=" "
          onChange={() => clearErrors('password')}
        />
        {errors.password && (
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        )}
      </Label>

      <Box mx="auto" as="div">
        <Button
          disabled={errors.name || errors.email || errors.password || isLoading}
        >
          Authorization
        </Button>
      </Box>
    </Form>
  );
};
