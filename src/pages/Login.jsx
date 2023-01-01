import { Box } from 'components/Box';
import { LoginForm } from 'components/LoginForm';

const Login = () => {
  return (
    <main>
      <Box p={[4]} as="section">
        <LoginForm />
      </Box>
    </main>
  );
};

export default Login;
