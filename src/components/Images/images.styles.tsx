import styled from "styled-components";

export const ImagesBox = styled.div`
  margin-top: 5%;
  column-count: 3;
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

export const ImageTag = styled.img`
  -webkit-filter: brightness(100%);
  -moz-filter: brightness(100%);
`;

export const ImageContainer = styled.div`
  position: relative;
  
  &:hover {
    -webkit-filter: brightness(60%);
    -moz-filter: brightness(60%);

    div {
      opacity: 1;
      display: flex;
      z-index: 100;
    }
  }
`;

export const AuthorDetails = styled.div`
  color: white;
  font-size: 1rem;
  width: 80%;
  position: absolute;
  left: 5%;
  top: 90%;
  display: none;

  a {
    color: white;
    text-decoration: none;
    margin-left: 10px;
  }
   
  &:hover {
    a {
      text-decoration: underline;
    }
  }
`;

