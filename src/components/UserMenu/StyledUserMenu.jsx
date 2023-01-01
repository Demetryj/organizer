import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[4]}px;
`;

export const UserName = styled.p`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xm};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
`;

export const Button = styled.button`
  padding: ${props => props.theme.space[3]}px;

  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xm};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primaryText};

  background-color: ${props => props.theme.colors.backgroundBtn};

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundAccentBtn};
  }
`;
