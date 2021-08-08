import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 0.8px solid #545454;
`;

export const LogoContainer = styled.div`
  margin-left: 20px;
  width: 5%;
`;

export const FormContainer = styled.form`
  width: 93%;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8%;
  background-color: #545454;
  color: #ffff;
  padding: 15px;
`;