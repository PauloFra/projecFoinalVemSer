import styled from "styled-components";
import { Field } from "formik";

export const ContainerGeral = styled.div`
  font-size: 17px;
  margin: 0 auto;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 20px;
  form {
    -webkit-box-shadow: 20px 18px 50px 5px rgba(0, 0, 0, 0.16);
    box-shadow: 20px 18px 50px 5px rgba(0, 0, 0, 0.16);
    gap: 15px 150px;
    padding: 0px 30px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    border: 1px solid rgb(159, 162, 180);
    border-radius: 8px;
  }
`;
export const TitleForm = styled.h1`
  color: rgb(51, 51, 51);
  margin: 20px 0;
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  input {
    width: 250px;
    margin-top: 8px;
    border-radius: 9px;
    height: 30px;
    padding: 4px 0 4px 7px;

    font-size: 15px;
    border: 1px solid rgb(159, 162, 180);

    color: rgb(159, 162, 180);
    ::placeholder {
      color: rgb(159, 162, 180);
    }
  }
`;
export const DivRowFlex = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
  }
`;
export const Label = styled.label`
  color: rgb(159, 162, 180);
  font-weight: bold;
  text-transform: capitalize;
`;
export const TitleInfoTopic = styled.h2`
  color: rgb(51, 51, 51);
  grid-column-start: 1;
  grid-column-end: 3;
  align-self: flex-end;
`;
export const DivCabeçalho = styled.div`
  color: rgb(51, 51, 51);
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const DivError = styled.div`
  margin: 3px 0px 0px 5px;
  color: #ff6969;
  font-weight: bold;

  font-size: 14px;
`;
/* FORM */

export const ContainerInputs = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 250 250px;
  grid-template-rows: 78px 78px;
  /* validar responsivo */
`;

export const Botao = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  background-color: transparent;
  padding: 12px 0;
  margin: 20px 500px;
  font-size: 20px;
  grid-column: 1/3;
  cursor: pointer;
  :hover {
    color: white;
    border: 1px solid white;
    background-color: rgb(159, 162, 180);
  }
`;

export const CheckBox = styled(Field)`
  height: 24px;
  width: 24px;
  margin-left: 5px;
`;

export const ButtonExcluir = styled.button`
  color: #ff0000;
  background-color: transparent;
  border: 0.5px solid rgb(255, 0, 0, 0.3);
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 6px;
  :hover {
    background-color: rgb(255, 204, 204, 0.5);
  }
`;
export const ButtonAdd = styled.button`
  font-weight: bold;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  padding: 4px 0;
  :hover {
    background-color: rgb(159, 162, 180);
  }
`;
