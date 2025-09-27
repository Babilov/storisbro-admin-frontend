import styled from "styled-components";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import { useState } from "react";

const DivPricng = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: flex-start;
  margin: 10px auto;

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

const Input = styled.input`
  margin-left: 20px;
  height: 30px;
  border-radius: 20px;
  padding: 0 10px;
  width: 100px;

  @media (max-width: 900px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
    max-width: 300px;
  }
`;

const P = styled.p`
  font-size: 15px;
  margin: 0;
`;

const Button = styled.button`
  background: #13c925;
  height: 35px;
  width: 100%; /* на больших экранах занимает весь блок */
  border-radius: 15px;
  font-size: 20px;
  margin: 10px 0 0 0;
  display: block;

  @media (max-width: 600px) {
    width: 100px; /* ширина равна ширине инпутов по умолчанию */
    max-width: 300px; /* как у инпутов при увеличении */
  }
`;

const Pricing = () => {
  const labels = [
    "Стандартная комиссия",
    "Пониженная комиссия",
    "СРМ для админов",
    "Сумма за реферала",
    "Пользователь",
  ];

  const args = ["sk", "pk", "cpm", "refs_pay", "UID"];

  // Массив состояний для каждого input
  const [values, setValues] = useState(Array(labels.length).fill(""));

  const handleInputChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const handleSave = () => {
    const result = labels.reduce((acc, args, index) => {
      acc[args] = values[index];
      return acc;
    }, {});
    console.log(result);
  };

  return (
    <MyContainer>
      <TitleDiv title="Ценообразование" />
      <DivPricng>
        {labels.map((item, i) => (
          <Div key={i}>
            <P>{item}</P>
            <Input
              value={values[i]}
              onChange={(e) => handleInputChange(i, e.target.value)}
            />
          </Div>
        ))}
        <Button onClick={handleSave}>Сохранить</Button>
      </DivPricng>
    </MyContainer>
  );
};

export default Pricing;
