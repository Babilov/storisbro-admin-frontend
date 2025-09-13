import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainMenu from "./pages/MainMenu/MainMenu";
import Groups from "./pages/Groups/Groups";
import UsersBase from "./pages/UserBase/UsersBase";
import FundsRequests from "./pages/FundsRequests/FundsRequests";
import Statistic from "./pages/Statistic/Statistic";
import Pricing from "./pages/Pricing/Pricing";
import Creatives from "./pages/Creatives/Creatives";
import AdLinks from "./pages/AdLinks/AdLinks";
import PublicationSettings from "./pages/PublicationSettings/PublicationSettings";
import GroupStatistic from "./pages/Groups/GroupStatistic";
import UserStatistic from "./pages/UserBase/UserStatistic";
import AdPlace from "./pages/PublicationSettings/AdPlace";
import StatisticDetails from "./pages/Statistic/StatisticDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/creatives" element={<Creatives />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/adlinks" element={<AdLinks />} />

        <Route path="/groups">
          <Route index element={<Groups />} />
          <Route path="statistic/:id" element={<GroupStatistic />} />
        </Route>

        <Route path="/users">
          <Route index element={<UsersBase />} />
          <Route path=":id" element={<UserStatistic />} />
        </Route>

        <Route path="/funds" element={<FundsRequests />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/statistics-details" element={<StatisticDetails />} />

        <Route path="/publication_settings">
          <Route index element={<PublicationSettings />} />
          <Route path=":number" element={<AdPlace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
