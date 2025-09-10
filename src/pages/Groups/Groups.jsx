import Table from "../../components/Groups/GroupsTable";
import Search from "../../components/CommonComponents/Search";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";

const Groups = () => {
  const groups = [
    {
      id: 0,
      title: "Гайды",
      date: "30.07.2023 13:33",
      status: "Активно",
      userUID: "211sadasaw1",
    },
    {
      id: 1,
      title: "Гонки",
      date: "29.07.2023 13:20",
      status: "Отключено",
      userUID: "asdfasdgahfah",
    },

    {
      id: 2,
      title: "Гонки",
      date: "29.07.2023 13:20",
      status: "Отключено",
      userUID: "1245125123515",
    },

    {
      id: 3,
      title: "Гонки",
      date: "29.07.2023 13:20",
      status: "Отключено",
      userUID: "sadasaw1",
    },
  ];

  return (
    <MyContainer>
      <TitleDiv title="Сообщетсва" />
      <Search />
      <Table groups={groups} />
    </MyContainer>
  );
};

export default Groups;
