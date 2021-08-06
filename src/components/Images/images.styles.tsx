import styled from "styled-components";

export const ImagesContainer = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  margin: 0 250px;
`;

export const Image = styled.img`
  -webkit-filter: brightness(100%);
  margin: 5px 0;

  &:hover {
    cursor: zoom-in;
    -webkit-filter: brightness(70%);
  }

`;