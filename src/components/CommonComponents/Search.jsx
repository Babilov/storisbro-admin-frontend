import styled from "styled-components";

const Div = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  height: 60px;
`;

const Input = styled.input`
  width: 80%;
  height: 50px;

  @media (max-width: 600px) {
    height: 30px;
    margin: 0 5px;
  }
`;

const Search = () => {
  return (
    <Div>
      <p>Поиск</p>
      <Input />
      <img src="/icons/settings.png" alt="settings" />
    </Div>
  );
};

export default Search;
