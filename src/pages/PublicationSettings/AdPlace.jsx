import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import TitleDiv from "../../components/CommonComponents/TitleDiv";
import DragAndDrop from "../../components/PublicationSettings/DragAndDrop";
import MyInput from "../../components/CommonComponents/MyInput";
import MyTimePicker from "../../components/PublicationSettings/MyTimePicker";
import MyButton from "../../components/CommonComponents/MyButton";
import MyContainer from "../../components/CommonComponents/MyContainer";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { InputsWrapper } from "../../components/PublicationSettings/components";
import axios from "axios";
import { API_URL } from "../../utils/constants";

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
  "Период публикации",
];

const AdPlace = () => {
  const { number } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // состояния
  const [contentVideosCount, setContentVideosCount] = useState(3); // для первого инпута
  const [time, setTime] = useState(new Date());
  const [creativeFile, setCreativeFile] = useState(null); // для файла
  const [url, setUrl] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
  const handleSave = async () => {
    const res = await axios.post(`${API_URL}publications/settings/`, {
      file_obj: creativeFile,
      contentVideos: contentVideosCount,
      publication_time: time,
      add_url: url,
      position: [1, 0, 0, 0],
      tbp: [1, 1, 1],
      start_date: startDate,
      end_date: endDate,
    });
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
        <Div
          style={{
            justifyContent: isMobile ? "flex-start" : "space-between",
            flexWrap: "wrap",
          }}
        >
          <InputsWrapper>
            с{" "}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            по{" "}
            <input
              type="date"
              alue={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </InputsWrapper>

          <FormGroup sx={{ ml: isMobile ? 0 : 4, mt: isMobile ? 1 : 0 }}>
            <FormControlLabel control={<Checkbox />} label="Постоянно" />
          </FormGroup>
        </Div>
        {titles.map((title, index) => (
          <Div key={index}>
            <BoldText>{title}</BoldText>

            {index === 0 && (
              <MyInput
                sizes={{ height: "60px", width: "330px" }}
                padding="0px"
                value={contentVideosCount}
                onChange={(e) => setContentVideosCount(e.target.value)}
              />
            )}

            {index === 1 && <MyTimePicker date={time} setDate={setTime} />}

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
