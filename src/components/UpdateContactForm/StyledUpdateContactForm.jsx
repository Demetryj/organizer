import styled from 'styled-components';

export const Form = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[3]}px;
  width: 500px;
  height: 220px;

  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  border-color: ${props => props.theme.colors.borderColor};

  box-shadow: ${props => props.theme.shadows.second};
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};

  cursor: pointer;

  &:focus-within {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Input = styled.input`
  padding: ${props => props.theme.space[2]}px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.m};

  border-radius: ${props => props.theme.radii.normal};

  &:placeholder-shown {
    border-color: ${props => props.theme.colors.borderColor};
  }

  &:not(:placeholder-shown) {
    border-color: ${props => props.theme.colors.accent};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  width: 30px;
  height: 30px;

  color: ${props => props.theme.colors.primaryText};

  border: ${props => props.theme.radii.none};
  border-radius: ${props => props.theme.radii.round};

  box-shadow: ${props => props.theme.shadows.third};

  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  svg {
    width: 17px;
    height: 17px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.red};
  }
`;
