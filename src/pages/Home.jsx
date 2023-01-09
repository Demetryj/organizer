import { Box } from 'components/Box';
import { AboutApplicatin } from 'components/AboutApplicatin';

const Home = () => {
  return (
    <main>
      <Box p={[4]} as="section">
        <AboutApplicatin />
      </Box>
    </main>
  );
};

export default Home;
