import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";

const FundsTable = ({ funds }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={0}
      sx={{ width: "100%", borderRadius: 0, boxSizing: "border-box" }}
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
            boxSizing: "border-box",
          }}
        >
          {["ID", "Дата", "Статус", "Сумма"].map((text) => (
            <Box
              key={text}
              sx={{
                flex: text === "Дата" ? 1.5 : 1,
                fontWeight: "bold",
              }}
            >
              {text}
            </Box>
          ))}
        </Box>
      )}

      {/* Строки */}
      {funds.map((fund) => (
        <Box
          key={fund.id}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            py: 2,
            px: 2,
            gap: isMobile ? 1.5 : 0,
            borderBottom: "1px solid #eee",
            alignItems: isMobile ? "flex-start" : "center",
            boxSizing: "border-box",
          }}
        >
          {/* ID */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                ID
              </Typography>
            )}
            <Typography variant="body2">{fund.id}</Typography>
          </Box>

          {/* Дата */}
          <Box sx={{ flex: 1.5, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Дата
              </Typography>
            )}
            <Typography variant="body2">{fund.date}</Typography>
          </Box>

          {/* Статус */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Статус
              </Typography>
            )}
            <Typography variant="body2">{fund.status}</Typography>
          </Box>

          {/* Сумма */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Сумма
              </Typography>
            )}
            <Typography variant="body2">
              Сумма:
              <br />
              {fund.price} ₽
            </Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default FundsTable;
