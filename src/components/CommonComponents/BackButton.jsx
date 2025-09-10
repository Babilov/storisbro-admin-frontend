import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Для React Router
// Для Next.js используйте: import { useRouter } from 'next/navigation';

const BackIcon = styled.img`
  width: 40px;
  height: 30px;
  cursor: pointer;
`;

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <BackIcon src="/icons/back.svg" alt="Назад" onClick={goBack} />;
};

export default BackButton;
