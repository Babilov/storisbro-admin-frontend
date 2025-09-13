import { useLocation } from "react-router-dom";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";

const StatisticDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams)
    const dateFrom = queryParams.get("date_from");
    const dateTo = queryParams.get("date_to");
    console.log(dateFrom, dateTo)
    const title = `Статистика ${dateFrom} - ${dateTo}`

    return (
        <MyContainer>
            <TitleDiv>
                {title}
            </TitleDiv>
        </MyContainer>
    )
}

export default StatisticDetails;