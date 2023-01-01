import styled from 'styled-components';

export const Btn = styled.button`
  padding: ${props => props.theme.space[2]}px;

  width: 120px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.m};

  background-color: ${props => props.theme.colors.backgroundBtn};

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  box-shadow: ${props => props.theme.shadows.second};

  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundAccentBtn};
  }
`;
