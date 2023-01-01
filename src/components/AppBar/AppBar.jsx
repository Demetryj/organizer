import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';
import { Header, Wrapper, Logo } from './StyledAppBar';
import { Box } from 'components/Box';
import logo from 'images/logo.png';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Box
        display="flex"
        justifyContent="space-between"
        mx="auto"
        px={[4]}
        maxWidth={1400}
        as="div"
      >
        <Wrapper>
          <Logo to="/">
            <img src={logo} alt="logo" width={50} height={50} />
          </Logo>
          <Navigation />
        </Wrapper>
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </Box>
    </Header>
  );
};
