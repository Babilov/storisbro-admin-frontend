import { useLocation } from "react-router-dom";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 18px;
`;

const StatisticDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dateFrom = queryParams.get("date_from");
  const dateTo = queryParams.get("date_to");

  const title = `Статистика (${dateFrom} - ${dateTo})`;

  const [statistic, setStatistic] = useState(null);

  useEffect(() => {
    const getStatistic = async () => {
      try {
        const res = await axios.get(
          `${API_URL}statistic/?date_from=${dateFrom}&date_to=${dateTo}`
        );
        setStatistic(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getStatistic();
  }, [dateFrom, dateTo]);

  if (!statistic) return <MyContainer>Загрузка...</MyContainer>;

  return (
    <MyContainer>
      <TitleDiv title={title} />

      <Grid>
        <StatCard>
          <Label>Зарегистрировано пользователей</Label>
          <Value>
            {statistic.users} (новых {statistic.new_users})
          </Value>
        </StatCard>

        <StatCard>
          <Label>Отключено сообществ</Label>
          <Value>{statistic.disabled}</Value>
        </StatCard>

        <StatCard>
          <Label>Уникальных переходов на сайт</Label>
          <Value>{statistic.unique}</Value>
        </StatCard>

        <StatCard>
          <Label>Добавлено сообществ</Label>
          <Value>
            {statistic.new_c.all_enabled_count} (новых{" "}
            {statistic.new_c.new_in_range_count})
          </Value>
        </StatCard>

        <StatCard>
          <Label>Выведено</Label>
          <Value>{statistic.withdrawn}₽</Value>
        </StatCard>

        <StatCard>
          <Label>Просмотры</Label>
          <Value>{statistic.views_from_period}</Value>
        </StatCard>

        <StatCard>
          <Label>Приглашено рефералов</Label>
          <Value>{statistic.referrals}</Value>
        </StatCard>

        <StatCard>
          <Label>Новых участников ПК</Label>
          <Value>{statistic.pk_users}</Value>
        </StatCard>

        <StatCard>
          <Label>Сбоев в работе</Label>
          <Value>{statistic.fails}</Value>
        </StatCard>
      </Grid>
    </MyContainer>
  );
};

export default StatisticDetails;
