import { useParams } from "react-router-dom";
import styled from "styled-components";

import TitleDiv from "../../components/CommonComponents/TitleDiv";
import DragAndDrop from "../../components/PublicationSettings/DragAndDrop";
import MyInput from "../../components/CommonComponents/MyInput";
import MyTimePicker from "../../components/PublicationSettings/MyTimePicker";
import MyButton from "../../components/CommonComponents/MyButton";
import MyContainer from "../../components/CommonComponents/MyContainer";
import { useMediaQuery, useTheme } from "@mui/material";

const BoldText = styled.span`
  font-weight: 400;
  font-size: 25px;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: left;
  }
`;

const Div = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const titles = [
  "Контент-видео",
  "Время публикации",
  "Рекламный креатив",
  "Ссылка",
];

const AdPlace = () => {
  const { number } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <MyContainer>
      <TitleDiv title={`Рекламное место №${number}`} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {titles.map((title, index) => (
          <Div key={index}>
            <BoldText>{title}</BoldText>
            {index !== 1 && index !== 2 ? (
              <MyInput
                sizes={{ height: "60px", width: "330px" }}
                padding="0px"
              />
            ) : index === 1 ? (
              <MyTimePicker />
            ) : (
              <MyButton
                $isMobile={isMobile}
                background="transparent"
                border="1px solid black"
                margin="0px"
                sizes={{
                  height: "60px",
                }}
                style={{ width: isMobile ? "100%" : "330px" }}
              >
                Выбрать
              </MyButton>
            )}
          </Div>
        ))}
        <BoldText>Расположение</BoldText>
      </div>

      <DragAndDrop />
      <MyButton background="#13C925" sizes={{ height: "45px", width: "180px" }}>
        Сохранить
      </MyButton>
    </MyContainer>
  );
};

export default AdPlace;
