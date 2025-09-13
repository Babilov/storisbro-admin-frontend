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
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  transition: 0.2s ease-in-out;

  &:hover {
    transform: ${(props) => (props.clickable ? "scale(1.03)" : "none")};
  }
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

  // функция для преобразования формата YYYY-MM-DD → DD.MM.YYYY
  const formatDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };

  const title = `Статистика (${formatDate(dateFrom)} - ${formatDate(dateTo)})`;

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

  // функция скачивания Excel
  const handleDownload = async () => {
    try {
      const res = await axios.get(
        `http://62.113.96.70/admin/statistic/download/?date_from=${dateFrom}&date_to=${dateTo}`,
        { responseType: "blob" }
      );

      // создаём ссылку на скачивание
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `statistic_${dateFrom}_${dateTo}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      console.error("Ошибка при скачивании:", e);
    }
  };

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

        {/* Кнопка Excel */}
        <StatCard clickable onClick={handleDownload}>
          <img src="/icons/excel.png" alt="excel" style={{ width: "48px" }} />
        </StatCard>
      </Grid>
    </MyContainer>
  );
};

export default StatisticDetails;
