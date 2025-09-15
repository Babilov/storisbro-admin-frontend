import Table from "../../components/Groups/GroupsTable";
import Search from "../../components/CommonComponents/Search";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";

const Groups = () => {

  return (
    <MyContainer>
      <TitleDiv title="Сообщетсва" />
      <Search />
      <Table />
    </MyContainer>
  );
};

export default Groups;
