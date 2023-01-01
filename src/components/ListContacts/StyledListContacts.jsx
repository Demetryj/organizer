import styled from 'styled-components';

export const WrapperListContacts = styled.div`
  position: relative;
  width: 600px;
  height: 520px;

  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  border-color: ${props => props.theme.colors.borderColor};

  box-shadow: ${props => props.theme.shadows.second};
`;

export const Text = styled.p`
  margin-top: ${props => props.theme.space[2]}px;

  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};

  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;

  width: 100%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: ${props => props.theme.space[2]}px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.scroll};
    border-radius: ${props => props.theme.radii.normal};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${props => props.theme.radii.normal};
    background: ${props => props.theme.colors.backgroundScroll};
  }
`;

export const ElementList = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]}px;
  max-width: 100%;
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;

  border-bottom: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.borderColor};
`;
