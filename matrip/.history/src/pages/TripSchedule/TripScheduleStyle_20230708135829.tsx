import { styled } from "styled-components";

export const MainContainer = styled.div`
  max-width: 600px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

export const InfoCtnr = styled.div`
  width: 100%;
  margin: 15px 0px;

  display: flex;
  flex-direction: column;
`;
