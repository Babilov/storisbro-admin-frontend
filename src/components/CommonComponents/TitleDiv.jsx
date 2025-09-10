import styled from "styled-components";
import H1 from "./H1";
import BackButton from "./BackButton";

const TitleBlock = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid black;
  margin-top: 25px;
`;

const TitleDiv = ({ title }) => {
  return (
    <TitleBlock>
      <BackButton />
      <H1>{title}</H1>
    </TitleBlock>
  );
};

export default TitleDiv;
