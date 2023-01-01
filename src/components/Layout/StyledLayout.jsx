import styled from 'styled-components';
import bgImg from 'images/world-1302935_1280.jpg';

export const Container = styled.div`
  min-height: 100vh;

  background-image: linear-gradient(
      to right,
      rgba(163, 169, 216, 0.4),
      rgba(122, 125, 153, 0.4)
    ),
    url(${bgImg});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
