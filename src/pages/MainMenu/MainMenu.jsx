import { Link } from "react-router-dom";

import Li from "../../components/MainMenu/Li";
import Ul from "../../components/MainMenu/Ul";
import MyContainer from "../../components/CommonComponents/MyContainer";

const MainMenu = () => {
  const menuItems = [
    { name: "Креативы", path: "/creatives" },
    { name: "Сообщества", path: "/groups" },
    { name: "База пользователей", path: "/users" },
    { name: "Запросы на вывод", path: "/funds" },
    { name: "Статистика", path: "/statistic" },
    { name: "Публикация", path: "/publication_settings" },
    { name: "Ценообразование", path: "/pricing" },
    { name: "Рекламные ссылки", path: "/adlinks" },
  ];

  return (
    <MyContainer>
      <Ul>
        {menuItems.map((item, i) => (
          <Li key={i}>
            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                textAlign: "center",
              }}
            >
              {item.name}
            </Link>
          </Li>
        ))}
      </Ul>
    </MyContainer>
  );
};

export default MainMenu;
