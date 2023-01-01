import { Box } from 'components/Box';

const Home = () => {
  return (
    <main>
      <Box py={[4]} as="section">
        <Box
          display="flex"
          justifyContent="space-between"
          px={[4]}
          mx="auto"
          maxWidth={1400}
          as="div"
        >
          <h1>PHONEBOOK</h1>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
