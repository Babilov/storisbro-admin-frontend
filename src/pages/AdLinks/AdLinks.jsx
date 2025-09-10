import AdLinksTable from "../../components/AdLinks/AdLinksTable";
import MyButton from "../../components/CommonComponents/MyButton";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";

const AdLinks = () => {
  const adLinks = [
    {
      link: "Storisbro.com/?_ref=2Rh46f3L",
      title: "Таргет Вк",
      date: "01.08.2023",
      time: "17:02",
      redirects: 300,
      registrations: 9201,
    },
    {
      link: "Storisbro.com/ ?_ref=dsfdfs",
      title: "Форумы",
      date: "01.08.2023",
      time: "17:08",
      redirects: 19,
      registrations: 9201,
    },
  ];

  return (
    <MyContainer>
      <TitleDiv title="Рекламные ссылки" />
      <MyButton
        sizes={{ width: "185px", height: "45px" }}
        radius="10px"
        fontSize="25px"
      >
        Создать
      </MyButton>
      <AdLinksTable adLinks={adLinks} />
    </MyContainer>
  );
};

export default AdLinks;
