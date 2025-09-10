import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const AdButton = styled.button`
  background: #ffbe30;
  margin: 75px 15px;
  padding: 5px 15px;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 30px 0 15px 0;
    text-align: center;
    padding: 5px 0;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 130px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    input {
      width: 100%;
      max-width: 300px;
    }
  }
`;
