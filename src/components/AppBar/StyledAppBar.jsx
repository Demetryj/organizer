import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: ${props => props.theme.space[3]}px 0px;

  border-bottom: ${props => props.theme.borders.boldLine};
  border-color: ${props => props.theme.colors.borderColor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  margin-right: ${props => props.theme.space[5]}px;
`;
