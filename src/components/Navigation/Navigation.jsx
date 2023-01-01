import { Wrapper, LinkMenu } from './StylesNavigation';

export const Navigation = () => {
  return (
    <Wrapper>
      <LinkMenu to="/">Home</LinkMenu>
      <LinkMenu to="contacts">Contacts</LinkMenu>
    </Wrapper>
  );
};
