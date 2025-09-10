import MyContainer from "../../components/CommonComponents/MyContainer";
import Search from "../../components/CommonComponents/Search";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import UsersTable from "../../components/UsersBase/UsersTable";

const UsersBase = () => {
  const users = [
    {
      id: "2adjadawq",
      date: "30.07.2023",
      comission: "20",
      price: "53.200",
      isPk: true,
      groupsCount: 7,
    },
    {
      id: "ewerq1322",
      date: "28.07.2023",
      comission: "5",
      price: "53.200",
      isPk: true,
      groupsCount: 7,
    },
  ];
  return (
    <MyContainer>
      <TitleDiv title="База пользователей" />
      <Search />
      <UsersTable users={users} />
    </MyContainer>
  );
};

export default UsersBase;
