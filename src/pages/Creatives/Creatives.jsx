import MyContainer from "../../components/CommonComponents/MyContainer";
import Search from "../../components/CommonComponents/Search";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import CreativesTable from "../../components/Creatives/CreativesTable";

const Creatives = () => {
  const creatives = [
    {
      type: "Двойной",
      number: "#1 (утренний)",
      date: "30.07.2023",
      time: "13:30",
      views: "120.000",
      redirects: 1000,
      CTR: 10,
    },
    {
      type: "Одиночный",
      number: "#3 (вечерний)",
      date: "29.07.2023",
      time: "13:30",
      views: "120.000",
      redirects: 1000,
      CTR: 10,
    },
    {
      type: "Одиночный",
      number: "#3 (вечерний)",
      date: "29.07.2023",
      time: "13:30",
      views: "120.000",
      redirects: 1000,
      CTR: 10,
    },
    {
      type: "Одиночный",
      number: "#3 (вечерний)",
      date: "29.07.2023",
      time: "13:30",
      views: "120.000",
      redirects: 1000,
      CTR: 10,
    },
  ];

  return (
    <MyContainer>
      <TitleDiv title="Креативы" />
      <Search />
      <CreativesTable creatives={creatives} />
    </MyContainer>
  );
};

export default Creatives;
