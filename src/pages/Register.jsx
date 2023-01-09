import { Box } from 'components/Box';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
  return (
    <main>
      <Box p={[4]} as="section">
        <RegisterForm />
      </Box>
    </main>
  );
};

export default Register;
