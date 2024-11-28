import styled from "styled-components";

export const CurrencyConventer = styled.form``;

export const FormHeader = styled.h2`
  color: teal;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  border-bottom: 1px solid teal;
  padding-bottom: 15px;
`;

export const Content = styled.span`
  font-weight: 700;
  font-size: 18px;
  width: 170px;
`;

export const Input = styled.input`
  margin: auto;
  background-color: white;
  border: 2px solid teal;
  width: 400px;
  padding: 7px;
  border-radius: 10px;
  justify-content: flex-end;
  text-align: center;
`;

export const Select = styled.select`
  margin: auto;
  background-color: white;
  border: 2px solid teal;
  width: 400px;
  padding: 7px;
  border-radius: 10px;
  justify-content: flex-end;
  text-align: center;
`;

export const Button = styled.button`
  margin: auto;
  padding: 8px;
  background-color: teal;
  color: #eee;
  border: none;
  border-radius: 10px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(1, 146, 146);
  }
`;

export const FormInfo = styled.p`
  font-size: 12px;
  text-align: center;
`;
