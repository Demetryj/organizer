import { Wrapper, LinkAuth } from './StyledAuthNav';

export const AuthNav = () => {
  return (
    <Wrapper>
      <LinkAuth to="register">Register</LinkAuth>
      <LinkAuth to="login">LogIn</LinkAuth>
    </Wrapper>
  );
};
