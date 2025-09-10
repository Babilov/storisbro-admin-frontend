import styled from "styled-components";

const MyButton = styled.button`
  background: ${({ background }) => background || "#FF9C07"};
  width: ${({ sizes }) => sizes?.width || "100px"};
  height: ${({ sizes }) => sizes?.height || "20px"};
  border-radius: ${({ radius }) => radius || "20px"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  margin: ${({ margin }) => margin || "0 auto"};
  border: ${({ border }) => border || "none"};
  outline: none;
  cursor: pointer;
`;

export default MyButton;
