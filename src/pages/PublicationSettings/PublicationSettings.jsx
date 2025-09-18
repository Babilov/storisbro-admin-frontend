import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import MyButton from "../../components/CommonComponents/MyButton";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Div,
  InputsWrapper,
} from "../../components/PublicationSettings/components";
import AdPlaces from "../../components/PublicationSettings/AdPlaces";
import { useState } from "react";

const PublicationSettings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <MyContainer>
      <TitleDiv title="Настройки публикации" />
      <div style={{ margin: "0 auto", maxWidth: 600, width: "100%" }}>
        <div>
          <h3>Промежуток</h3>
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
        </div>
        <AdPlaces isMobile={isMobile} />
      </div>
      <MyButton
        background="#13C925"
        sizes={{
          width: isMobile ? "100%" : "180px",
          height: "45px",
          marginTop: isMobile ? 24 : 0,
        }}
      >
        Сохранить
      </MyButton>
    </MyContainer>
  );
};

export default PublicationSettings;
