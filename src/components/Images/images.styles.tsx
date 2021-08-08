import styled from "styled-components";

export const ImagesBox = styled.div`
  margin-top: 5%;
  column-count: 3;
`;

export const Image = styled.img`
  -webkit-filter: brightness(100%);
  -moz-filter: brightness(100%);

  &:hover {
    cursor: zoom-in;
    -webkit-filter: brightness(70%);
    -moz-filter: brightness(70%);
  }
`;

export const NoResults = styled.h2`
  font-size: 2.1rem
`;

export const CircularProgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10% 0;
`;

