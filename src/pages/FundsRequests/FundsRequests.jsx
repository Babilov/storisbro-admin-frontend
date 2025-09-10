import MyContainer from "../../components/CommonComponents/MyContainer";
import Search from "../../components/CommonComponents/Search";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import FundsTable from "../../components/FundsRequests/FundsTable";

const FundsRequests = () => {
  const funds = [
    {
      id: "211sadasaw1",
      date: "30.07.2023",
      time: "13:33",
      status: "На рассмотрении",
      price: "1401",
    },
    {
      id: "211sadasaw1",
      date: "30.07.2023",
      time: "13:33",
      status: "Оплачен",
      price: "1599",
    },
  ];
  return (
    <MyContainer>
      <TitleDiv title="Вывод средств" />
      <Search />
      <FundsTable funds={funds} />
    </MyContainer>
  );
};

export default FundsRequests;
