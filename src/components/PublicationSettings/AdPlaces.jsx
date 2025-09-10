import AdItem from "./AdItem";
import { Div } from "./components";

const AdPlaces = ({ isMobile }) => {
  const itemsCount = 3;

  return (
    <Div
      style={{
        flexWrap: isMobile ? "wrap" : "nowrap",
        justifyContent: isMobile ? "flex-start" : "initial",
      }}
    >
      <h3
        style={{
          width: isMobile ? "100%" : "auto",
          marginBottom: isMobile ? 12 : 0,
        }}
      >
        Настройка рекламных мест
      </h3>

      {Array.from({ length: itemsCount }).map((_, i) => (
        <AdItem key={i} number={i + 1} />
      ))}
    </Div>
  );
};

export default AdPlaces;
