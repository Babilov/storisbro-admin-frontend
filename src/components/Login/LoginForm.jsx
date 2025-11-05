import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#d9d9d9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 320,
          textAlign: "center",
          bgcolor: "#d9d9d9",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Вход
        </Typography>
        <TextField
          label="Введите логин"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ mb: 2, bgcolor: "white" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Введите пароль"
          variant="outlined"
          type="password"
          fullWidth
          size="small"
          sx={{ mb: 3, bgcolor: "white" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            bgcolor: "#ffa500",
            color: "black",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#ffb733" },
          }}
        >
          Войти
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginForm;
