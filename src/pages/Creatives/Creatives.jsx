import MyContainer from "../../components/CommonComponents/MyContainer";
import Search from "../../components/CommonComponents/Search";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import CreativesTable from "../../components/Creatives/CreativesTable";

const Creatives = () => {
  return (
    <MyContainer>
      <TitleDiv title="Креативы" />
      <Search />
      <CreativesTable />
    </MyContainer>
  );
};

export default Creatives;
