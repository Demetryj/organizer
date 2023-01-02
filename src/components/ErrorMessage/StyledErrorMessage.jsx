import styled from 'styled-components';

export const Text = styled.p`
  position: absolute;
  left: 0;
  bottom: -22px;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.red};
`;
