import { useLocation } from "react-router-dom";
import MyContainer from "../../components/CommonComponents/MyContainer";
import TitleDiv from "../../components/CommonComponents/TitleDiv";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const StatisticDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dateFrom = queryParams.get("date_from");
    const dateTo = queryParams.get("date_to");
    
    useEffect(() => {
        const getStatistic = async () => {
            const res = await axios.get(`${API_URL}statistic/?date_from=${dateFrom}&date_to=${dateTo}`);
            console.log(res)
        }
        getStatistic();
    }, [dateFrom, dateTo])

    return (
        <MyContainer>
            <TitleDiv>
                Статистика
            </TitleDiv>
        </MyContainer>
    )
}

export default StatisticDetails;