import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from {
    opacity: 0;
    margin-top: 100%;
  }
`;

export const Project = styled.div`
  animation: ${Animation} ${props => props.secund}s;
`;

export const Container = styled.div`
  margin-top: 14vh;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  
  @media (max-width: 1055px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  @media (max-width: 665px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`