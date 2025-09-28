import {
  Box,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";
import { formatDate, formatTime } from "../../utils/funcs";

const AdLinksTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ url: "", name: "" });

  useEffect(() => {
    const getLinks = async () => {
      try {
        const res = await axios.get(`${API_URL}links`);
        setLinks(res.data.requests);
      } catch (e) {
        console.log(e);
      }
    };
    getLinks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}links/create/`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      // добавить новую ссылку в стейт
      setLinks((prev) => [...prev, res.data]);
      // очистить форму
      setFormData({ url: "", name: "" });
      setShowForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: 0,
        boxSizing: "border-box",
        p: 2,
      }}
    >
      {/* Кнопка для открытия формы */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm((prev) => !prev)}
        sx={{ mb: 2 }}
      >
        {showForm ? "Отмена" : "Добавить ссылку"}
      </Button>

      {/* Форма */}
      {showForm && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
        >
          <TextField
            label="Ссылка"
            value={formData.url}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, url: e.target.value }))
            }
            required
          />
          <TextField
            label="Название"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <Button type="submit" variant="contained" color="success">
            Сохранить
          </Button>
        </Box>
      )}

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
            (text) => (
              <Box key={text} sx={{ flex: 1, fontWeight: "bold" }}>
                {text}
              </Box>
            )
          )}
        </Box>
      )}

      {/* Строки / карточки */}
      {links.map((link, i) => (
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
              href={link.url}
              target="_blank"
              rel="noreferrer"
              sx={{ color: "primary.main", textDecoration: "underline" }}
            >
              {link.url}
            </Typography>
          </Box>

          {/* Название */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Название
              </Typography>
            )}
            <Typography variant="body2">{link.name}</Typography>
          </Box>

          {/* Дата и время */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Дата и время
              </Typography>
            )}
            <Typography variant="body2">
              {formatDate(link.date)} <br /> {formatTime(link.date)}
            </Typography>
          </Box>

          {/* Переходы */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Переходы
              </Typography>
            )}
            <Typography variant="body2">{link.clicks}</Typography>
          </Box>

          {/* Регистрации */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {isMobile && (
              <Typography variant="body2" color="text.secondary">
                Регистрации
              </Typography>
            )}
            <Typography variant="body2">{link.registrations}</Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default AdLinksTable;
