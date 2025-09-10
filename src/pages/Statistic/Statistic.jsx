import styled from "styled-components";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Div = styled.div`
  border-bottom: 1px solid black;
  padding: 20px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 16px 0;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
`;

const Button = styled.button`
  background: #13c925;
  border-radius: 20px;
  height: 35px;
  width: 10%;
  margin: 12px auto;
  color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 50%;
    font-size: 14px;
  }
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

const Statistic = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MyContainer>
      <TitleDiv title="Статистика" />

      <Div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? 8 : 0,
          }}
        >
          Промежуток с <Input type="date" /> по <Input type="date" />
        </div>
      </Div>

      <Button>Показать</Button>
    </MyContainer>
  );
};

export default Statistic;
