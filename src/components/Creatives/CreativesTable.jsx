import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";

const CreativesTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [creatives, setCreatives] = useState([]);

  useEffect(() => {
    const fetchCreatives = async () => {
      try {
        const res = await axios.get(`${API_URL}creatives`, {
          headers: { Accept: "application/json" },
        });

        setCreatives(res.data.results);
      } catch (e) {
        console.error("Request failed:", e);
      }
    };
    fetchCreatives();
  }, []);

  // Функция форматирования ISO-строки в ДД ММ ГГГГ + ЧЧ ММ
  const formatDateTime = (isoString) => {
    if (!isoString) return { date: "-", time: "-" };

    const dateObj = new Date(isoString);

    const date = dateObj
      .toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })

    const time = dateObj
      .toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      console.log(date, time)
    return { date, time };
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Заголовки — только на десктопе */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            bgcolor: "#f5f5f5",
            py: 2,
            px: 2,
            borderBottom: "1px solid #ddd",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          
          {["Кератив", "Номер", "Дата/время", "Просмотры", "Переходы", "CTR"].map(
            (text) => (
              <Box
                key={text}
                sx={{
                  flex: text === "Дата/время" ? 1.5 : 1,
                  fontWeight: "bold",
                }}
              >
                {text}
              </Box>
            )
          )}
        </Box>
      )}

      {/* Строки */}
      {creatives.map((creative, i) => {
        const { date, time } = formatDateTime(creative.published_at);

        return (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              width: "100%",
              py: 2,
              px: 2,
              borderBottom: "1px solid #eee",
              gap: isMobile ? 1.5 : 0,
              alignItems: isMobile ? "flex-start" : "center",
              boxSizing: "border-box",
            }}
          >
            {/* Кератив */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <Box
                component="img"
                src="/creatives/creative.png"
                sx={{ width: 40, height: 40, borderRadius: "50%" }}
              />
              <Box>
                {isMobile && (
                  <Typography variant="body2" color="text.secondary">
                    Кератив
                  </Typography>
                )}
                <Typography variant="body2">{creative.creative_type}</Typography>
              </Box>
            </Box>

            {/* Номер */}
            <Box sx={{ flex: 1, width: "100%" }}>
              {isMobile && (
                <Typography variant="body2" color="text.secondary">
                  Номер
                </Typography>
              )}
              <Typography variant="body2">{creative.id}</Typography>
            </Box>

            {/* Дата/время */}
            <Box sx={{ flex: 1.5, width: "100%" }}>
              {isMobile && (
                <Typography variant="body2" color="text.secondary">
                  Дата/время
                </Typography>
              )}
              <Typography variant="body2">
                {date}
                <br />
                {time}
              </Typography>
            </Box>

            {/* Просмотры */}
            <Box sx={{ flex: 1, width: "100%" }}>
              {isMobile && (
                <Typography variant="body2" color="text.secondary">
                  Просмотры
                </Typography>
              )}
              <Typography variant="body2">{creative.views}</Typography>
            </Box>

            {/* Переходы */}
            <Box sx={{ flex: 1, width: "100%" }}>
              {isMobile && (
                <Typography variant="body2" color="text.secondary">
                  Переходы
                </Typography>
              )}
              <Typography variant="body2">{creative.clicks}</Typography>
            </Box>

            {/* CTR */}
            <Box sx={{ flex: 1, width: "100%" }}>
              {isMobile && (
                <Typography variant="body2" color="text.secondary">
                  CTR
                </Typography>
              )}
              <Typography variant="body2" color="text.secondary">
                {creative.ctr} %
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Paper>
  );
};

export default CreativesTable;
