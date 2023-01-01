import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[4]}px;
`;

export const LinkMenu = styled(NavLink)`
  padding: ${props => props.theme.space[3]}px;

  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xm};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};

  border-radius: ${props => props.theme.radii.normal};

  text-decoration: none;

  transition: color 250ms, background-color 250ms;

  &.active {
    background-color: ${props => props.theme.colors.backgroundBtnHeader};
    color: ${props => props.theme.colors.white};
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: ${props => props.theme.colors.backgroundBtnHeader};
    color: ${props => props.theme.colors.white};
  }
`;
