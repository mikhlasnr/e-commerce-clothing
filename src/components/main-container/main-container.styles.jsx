import styled from "styled-components";

export const Container = styled.div`
  padding: 0 25px;
  @media (min-width: 768px) {
    padding: 0 50px;
  }
  @media (min-width: 1024px) {
    padding: 0 75px;
  }
  @media (min-width: 1400px) {
    max-width: 1440px;
    padding: 0 100px;
    margin: 0 auto;
  }
`;
