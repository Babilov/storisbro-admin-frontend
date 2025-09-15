import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/constants";

const GroupsTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [groups, setGroups] = useState([])

  useEffect(() => {
    const getGroups = async () => {
      try {
        const res = await axios.get(`${API_URL}community/`)
        setGroups(res.data)
      }
      catch (e) {
        console.log(e)
      }
    } 
    getGroups()
  }, [])

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Заголовки — только для десктопа */}
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
          {["Аватар", "Название", "Дата", "Статус", "Действие", "UID"].map(
            (text) => (
              <Box
                key={text}
                sx={{
                  flex: text === "Дата" ? 1.5 : 1,
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
      {groups.map((group) => (
        <Box
          key={group.group_id}
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
          {/* Аватар */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src={group.group_photo}
              sx={{ width: 40, height: 40, borderRadius: "50%" }}
            />
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Аватар
              </Typography>
            )}
          </Box>

          {/* Название */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Название
              </Typography>
            )}
            <Typography variant="body2">{group.community_name}</Typography>
          </Box>

          {/* Дата */}
          <Box sx={{ flex: 1.5, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Дата
              </Typography>
            )}
            <Typography variant="body2">{group.date_added}</Typography>
          </Box>

          {/* Статус */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Статус
              </Typography>
            )}
            <Typography
              variant="body2"
              sx={{ color: group.is_enabled === "Активно" ? "green" : "red" }}
            >
              {group.is_enabled}
            </Typography>
          </Box>

          {/* Действие */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Действие
              </Typography>
            )}
            <Link
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "blue",
              }}
              state={{ title: group.community_name }}
              to={`statistic/${group.community_id}`}
            >
              Открыть статистику
            </Link>
          </Box>

          {/* UID */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                UID
              </Typography>
            )}
            <Link
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "blue",
              }}
              to={`/users/${group.user_id}`}
            >
              {group.user_id}
            </Link>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default GroupsTable;
