import TitleDiv from "../../components/CommonComponents/TitleDiv";
import GroupInfoBlock from "../../components/Groups/GroupStatistic/GroupInfoBlock";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import MyButton from "../../components/CommonComponents/MyButton";
import MyContainer from "../../components/CommonComponents/MyContainer";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { useState } from "react";

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

// Карточка для одной записи статистики
const StatCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d9d9d9;
  border-radius: 12px;
  padding: 12px 20px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 500;

  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    border-right: 1px solid #aaa;

    &:last-child {
      border-right: none;
    }
  }
`;

const GroupStatistic = () => {
  const location = useLocation();
  const { id } = useParams();
  const { title } = location.state || {};

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [stats, setStats] = useState([]);

  const handleClick = async () => {
    if (!dateFrom || !dateTo) {
      alert("Выберите обе даты");
      return;
    }

    try {
      const res = await axios.get(
        `${API_URL}community/stats/${id}/?date_from=${dateFrom}&date_to=${dateTo}`
      );
      setStats(res.data);
    } catch (err) {
      console.error("Ошибка запроса:", err);
    }
  };

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
        Сроки с 
        <Input 
          type="date" 
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)} 
        /> 
        по 
        <Input 
          type="date" 
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)} 
        />
      </DateDiv>

      <MyButton 
        sizes={{ width: "180px", height: "40px" }} 
        onClick={handleClick}
      >
        Показать
      </MyButton>

      {/* Вывод карточек */}
      <div>
        {stats.map((item, index) => (
          <StatCard key={index}>
            <div>Дата: {new Date(item.date).toLocaleDateString("ru-RU")}</div>
            <div>Рейтинг: {item.rank}</div>
            <div>Заработок: {item.income} ₽</div>
          </StatCard>
        ))}
      </div>
    </MyContainer>
  );
};

export default GroupStatistic;
