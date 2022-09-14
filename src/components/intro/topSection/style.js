import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  gap: 32px;
  padding: 2% 8%;
  background-color: #1f2e35;
`;

export const Img = styled.img`
  width: 100%;
  grid-column: 3 / span 4;
  grid-row: 1 / span 4;
`;

export const Title = styled.p`
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  line-height: 61px;
  letter-spacing: 0.2px;
  color: #ffffff;
`;

export const Description = styled.p`
  grid-column: 1 / span 2;
  grid-row: 2;
  text-align: left;
  color: #ffffff;
`;
