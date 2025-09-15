import TitleDiv from "../../components/CommonComponents/TitleDiv";
import GroupInfoBlock from "../../components/Groups/GroupStatistic/GroupInfoBlock";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import MyButton from "../../components/CommonComponents/MyButton";
import MyContainer from "../../components/CommonComponents/MyContainer";

const Div = styled.div`
  padding: 10px 50px;
  border-right: 1px solid black;
  height: 3vh;
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 4px 8px;
  margin: 0 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    margin: 4px 0;
    width: 100px;
  }
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const GroupStatistic = () => {
  const location = useLocation();
  const { id } = useParams()
  console.log(id)
  const { title } = location.state || {};
  return (
    <MyContainer>
      <TitleDiv title="Статистика сообщества" />
      <GroupInfoBlock>
        <Div>
          <img src="/groupAva.png" alt="ava" />
        </Div>
        <Div>
          <span>{title}</span>
        </Div>
        <Div>
          <span>30.07.2025</span>
        </Div>
      </GroupInfoBlock>
      <DateDiv>
        Сроки с <Input type="date" /> по <Input type="date" />
      </DateDiv>
      <MyButton sizes={{ width: "180px", height: "40px" }}>Показать</MyButton>
    </MyContainer>
  );
};

export default GroupStatistic;
