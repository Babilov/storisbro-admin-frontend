import TitleDiv from "../../components/CommonComponents/TitleDiv";
import GroupInfoBlock from "../../components/Groups/GroupStatistic/GroupInfoBlock";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import MyButton from "../../components/CommonComponents/MyButton";
import MyContainer from "../../components/CommonComponents/MyContainer";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { useEffect, useState } from "react";

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





/*const handleClick = async () => {
  const res = axios.get(`${API_URL}community/stats/${id}/date_from=${dateFrom}&date_to=${dateTo}`)

}*/



const GroupStatistic = () => {
  const location = useLocation();
  const { id } = useParams()
  console.log(id)
  const { title } = location.state || {};

  const handleDateChange = (e, setDate) => {
      setDate(e.target.value);
  };

  useEffect(() => {
    console.log(`DATEfrom: ${dateFrom}`)
    console.log(`DATEto: ${dateTo}`)
  }, [dateFrom, dateTo])


  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

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
        Сроки с <Input type="date" value={dateFrom} onChange={(e) => handleDateChange(e, setDateFrom)} /> 
        по <Input type="date" value={dateTo} onChange={(e) => handleDateChange(e, setDateTo)} />
      </DateDiv>
      <MyButton sizes={{ width: "180px", height: "40px" }}>Показать</MyButton>
    </MyContainer>
  );
};

export default GroupStatistic;
