import { Wrapper, LinkAuth } from './StyledAuthNav';

export const AuthNav = () => {
  return (
    <Wrapper>
      <LinkAuth to="register">Authorization</LinkAuth>
      <LinkAuth to="login">LogIn</LinkAuth>
    </Wrapper>
  );
};
