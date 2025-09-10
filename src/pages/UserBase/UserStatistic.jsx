import { useParams } from "react-router-dom";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #333;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: #666;
  min-width: 180px;
  display: inline-block;
`;

const InfoValue = styled.span`
  font-weight: 400;
  color: #333;
`;

const CheckIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const UserStatistic = () => {
  const { id } = useParams();

  return (
    <MyContainer>
      <TitleDiv title={`Пользователь #${id}`} />

      <Card>
        <SectionTitle>Личный профиль</SectionTitle>

        <TwoColumnLayout>
          <div>
            <InfoRow>
              <InfoLabel>Почта:</InfoLabel>
              <InfoValue>resasqwq@gmail.com</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Аккаунт Вконтакте:</InfoLabel>
              <InfoValue>@this.state.developer</InfoValue>
            </InfoRow>
          </div>

          <div>
            <InfoRow>
              <InfoLabel>Дата регистрации:</InfoLabel>
              <InfoValue>25.06.2025 13:32</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Статус:</InfoLabel>
              <InfoValue>Активный</InfoValue>
            </InfoRow>
          </div>
        </TwoColumnLayout>
      </Card>

      <TwoColumnLayout>
        <Card>
          <SectionTitle>Безопасность</SectionTitle>

          <InfoRow>
            <CheckIcon src="/icons/check.png" alt="check" />
            <InfoValue>Пароль был установлен 05.06.2023 17:20</InfoValue>
          </InfoRow>

          <InfoRow>
            <CheckIcon src="/icons/check.png" alt="check" />
            <InfoValue>Пароль был изменен 05.06.2023 19:20</InfoValue>
          </InfoRow>
        </Card>

        <Card>
          <SectionTitle>Финансы</SectionTitle>

          <InfoRow>
            <InfoLabel>Комиссия:</InfoLabel>
            <InfoValue>5%</InfoValue>
          </InfoRow>

          <InfoRow>
            <InfoLabel>Последний вывод:</InfoLabel>
            <InfoValue>25.06.2025 13:32</InfoValue>
          </InfoRow>
        </Card>
      </TwoColumnLayout>

      <TwoColumnLayout>
        <Card>
          <SectionTitle>Сообщества</SectionTitle>
          <InfoValue>7 сообществ</InfoValue>
        </Card>

        <Card>
          <SectionTitle>Рефералы</SectionTitle>
          <InfoValue>7 приглашенных</InfoValue>
        </Card>
      </TwoColumnLayout>
    </MyContainer>
  );
};

export default UserStatistic;
