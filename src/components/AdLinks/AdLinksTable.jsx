import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";

const AdLinksTable = ({ adLinks }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          {["Ссылка", "Название", "Дата", "Переходы", "Регистрации"].map(
            (text, idx) => (
              <Box
                key={text}
                sx={{
                  flex: 1,
                  fontWeight: "bold",
                  // Если нужно, можно гибко менять ширину колонок
                  // flex: text === "Дата" ? 1.5 : 1,
                }}
              >
                {text}
              </Box>
            )
          )}
        </Box>
      )}

      {/* Строки / карточки */}
      {adLinks.map((adLink, i) => (
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
            wordBreak: "break-word",
          }}
        >
          {/* Ссылка */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Ссылка
              </Typography>
            )}
            <Typography
              variant="body2"
              component="a"
              href={adLink.link}
              target="_blank"
              rel="noreferrer"
              sx={{ color: "primary.main", textDecoration: "underline" }}
            >
              {adLink.link}
            </Typography>
          </Box>

          {/* Название */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Название
              </Typography>
            )}
            <Typography variant="body2">{adLink.title}</Typography>
          </Box>

          {/* Дата и время */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Дата и время
              </Typography>
            )}
            <Typography variant="body2">
              {adLink.date} <br /> {adLink.time}
            </Typography>
          </Box>

          {/* Переходы */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Переходы
              </Typography>
            )}
            <Typography variant="body2">{adLink.redirects}</Typography>
          </Box>

          {/* Регистрации */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Регистрации
              </Typography>
            )}
            <Typography variant="body2">{adLink.registrations}</Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default AdLinksTable;
