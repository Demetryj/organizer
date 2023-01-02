import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { ErrorMessage } from 'components/ErrorMessage';
import { Form, Label, Input } from './StyledLoginForm';

export const LoginForm = () => {
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
      email: '',
      password: '',
    },
  });

  const handleLogin = data => {
    const { email, password } = getValues();

    dispatch(
      logIn({
        email,
        password,
      })
    );

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
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
          type="submit"
          disabled={errors.email || errors.password || isLoading}
        >
          Login
        </Button>
      </Box>
    </Form>
  );
};
