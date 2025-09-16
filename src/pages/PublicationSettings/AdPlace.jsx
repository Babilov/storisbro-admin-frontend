import { useRef, useState } from "react";
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

  // состояния
  const [videoName, setVideoName] = useState(""); // для первого инпута
  const [date, setDate] = useState(new Date());
  const [creativeFile, setCreativeFile] = useState(null); // для файла
  const [url, setUrl] = useState("");

  // ref для input[file]
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click(); // программно кликаем по input
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log("Выбран файл:", file.name);
      setCreativeFile(file);
    }
  };

  // обработка сохранения
  const handleSave = () => {
    console.log("===== ДАННЫЕ ДЛЯ СОХРАНЕНИЯ =====");
    console.log("Контент-видео:", videoName);
    console.log("Время публикации:", date.toString());
    console.log("Рекламный креатив:", creativeFile ? creativeFile.name : null);
    console.log("Ссылка:", url);
    console.log("=================================");
    alert("Данные выведены в консоль ✅");
  };

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

            {index === 0 && (
              <MyInput
                sizes={{ height: "60px", width: "330px" }}
                padding="0px"
                value={videoName}
                onChange={(e) => setVideoName(e.target.value)}
              />
            )}

            {index === 1 && <MyTimePicker date={date} setDate={setDate} />}

            {index === 2 && (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <MyButton
                  $isMobile={isMobile}
                  background="transparent"
                  border="1px solid black"
                  margin="0px"
                  sizes={{ height: "60px" }}
                  style={{ width: isMobile ? "100%" : "330px" }}
                  onClick={handleFileClick}
                >
                  {creativeFile ? creativeFile.name : "Выбрать"}
                </MyButton>
              </>
            )}

            {index === 3 && (
              <MyInput
                sizes={{ height: "60px", width: "330px" }}
                padding="0px"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            )}
          </Div>
        ))}
        <BoldText>Расположение</BoldText>
      </div>

      <DragAndDrop />

      {/* кнопка сохранить */}
      <MyButton
        background="#13C925"
        sizes={{ height: "45px", width: "180px" }}
        onClick={handleSave}
      >
        Сохранить
      </MyButton>
    </MyContainer>
  );
};

export default AdPlace;
