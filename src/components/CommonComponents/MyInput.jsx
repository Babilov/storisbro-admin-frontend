import styled from "styled-components";

const MyInput = styled.input`
  width: ${({ sizes }) => sizes?.width || "100px"};
  height: ${({ sizes }) => sizes?.height || "20px"};
  border: none;
  outline: none;
  border-radius: 20px;
  color: ${({ color }) => color || "black"};
  padding: ${({ padding }) => padding || "5px 10px"};
  font-size: 18px;
  background-color: #f0f0f0;

  &:focus {
    box-shadow: 0 0 0 2px black;
  }

  @media (max-width: 600px) {
    width: 100% !important;
    height: 30px;
    font-size: 16px;
    padding: 8px 12px;
  }
`;
export default MyInput;
