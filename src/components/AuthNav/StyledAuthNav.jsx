import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]}px;
`;

export const LinkAuth = styled(NavLink)`
  padding: ${props => props.theme.space[3]}px;

  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xm};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primaryText};

  background-color: ${props => props.theme.colors.backgroundBtn};

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  cursor: pointer;
  text-decoration: none;
  transition: color 250ms, background-color 250ms;

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundAccentBtn};
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundAccentBtn};
  }
`;
