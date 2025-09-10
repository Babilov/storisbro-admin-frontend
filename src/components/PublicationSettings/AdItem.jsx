import { useNavigate } from "react-router-dom";
import { AdButton } from "./components";

const AdItem = ({ number }) => {
  const navigate = useNavigate();
  return (
    <AdButton onClick={() => navigate(`/publication_settings/${number}`)}>
      №{number}
    </AdButton>
  );
};

export default AdItem;
