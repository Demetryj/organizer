import styled from 'styled-components';

export const Circle = styled.span`
  width: 40px;
  height: 40px;
  text-align: center;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xm};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 2.3;

  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.round};
  border-color: ${props => props.theme.colors.borderAvatar};

  background-color: ${props => props.getColor};
  color: ${props => props.theme.colors.avatarLetters};
`;

export const Wprapper = styled.div`
  max-width: 80%;
  flex-grow: 1;

  word-break: break-word;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};
`;

export const DataUser = styled.span`
  display: block;
`;

export const Button = styled.button`
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;

  background-color: ${props => props.theme.colors.backgroundBtn};

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  box-shadow: ${props => props.theme.shadows.third};

  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props =>
      props.delete ? props.theme.colors.red : props.theme.colors.green};
  }
`;
