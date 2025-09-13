import { useLocation } from "react-router-dom";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";

const StatisticDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams)
    const dateFrom = queryParams.get("date_from");
    const dateTo = queryParams.get("date_to");

    return (
        <MyContainer>
            <TitleDiv>
                Статистика {dateFrom} - {dateTo}
            </TitleDiv>
        </MyContainer>
    )
}

export default StatisticDetails;