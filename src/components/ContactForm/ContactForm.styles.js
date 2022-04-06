import styled from "@emotion/styled";

export const FormStyled = styled.form`
margin-bottom: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export const InputStyled = styled.input`
  width: 250px;
  margin-bottom: 15px;
  padding: 10px;
  border: 2px solid orange;
  border-radius: 10px;
`;

export const SubmitButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  font-size: 15px;
  font-weight: 700;


  background-color: yellow;
  border: 2px solid orange;
  border-radius: 20px;

   cursor: pointer;

  &:hover {
    color: white;
    border-color: orange;
    background-color: tomato;
  }
`;
