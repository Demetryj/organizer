import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.space[5]}px;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
`;

export const Text = styled.p`
  display: block;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xm};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};
`;
