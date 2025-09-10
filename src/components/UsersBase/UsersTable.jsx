import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const UsersTable = ({ users }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: 0,
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Заголовки - только для десктопа */}
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
          {["ID", "Дата", "Вывод", "ПК", "Сообщества"].map((text) => (
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
      {users.map((user) => (
        <Box
          key={user.id}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            py: 2,
            px: 2,
            borderBottom: "1px solid #eee",
            gap: isMobile ? 1.5 : 0,
            boxSizing: "border-box",
          }}
        >
          {/* ID */}
          <Box sx={{ flex: 1 }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                ID
              </Typography>
            )}
            <Link
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "blue",
              }}
              to={`/users/${user.id}`}
            >
              {user.id}
            </Link>
          </Box>

          {/* Дата */}
          <Box sx={{ flex: 1.5 }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Дата
              </Typography>
            )}
            {user.date}
          </Box>

          {/* Вывод */}
          <Box sx={{ flex: 1 }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Вывод
              </Typography>
            )}
            Вывод ({user.comission}%) <br />
            {user.price} ₽
          </Box>

          {/* ПК */}
          <Box sx={{ flex: 1 }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                ПК
              </Typography>
            )}
            Участие в ПК: <br />
            {user.isPK ? "Да" : "Нет"}
          </Box>

          {/* Сообщества */}
          <Box sx={{ flex: 1 }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Сообщества
              </Typography>
            )}
            <Typography color="text.secondary" fontSize="0.875rem">
              {user.groupsCount}
            </Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default UsersTable;
