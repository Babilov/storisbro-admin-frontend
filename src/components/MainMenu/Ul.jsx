import styled from "styled-components";

const Ul = styled.ul`
  margin: auto auto;
  list-style: none;
  background: #d9d9d9;
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  @media (max-width: 600px) {
    width: 90%;
    padding-bottom: 50px; /* чтобы на мобилке не было слишком много */
  }
`;

export default Ul;
