import { useState, useRef } from "react";
import styled from "styled-components";

// Контейнер для всей зоны drag-and-drop
const DragDropWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    overflow-x: auto;
    gap: 10px;
  }
`;

// Элемент с изображением и инпутом в один ряд
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0; /* чтобы не сжимался при прокрутке */

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

const DraggableImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: grab;

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
  }
`;

const StyledInput = styled.input`
  width: 40px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
  text-align: center;

  @media (max-width: 600px) {
    height: 25px;
    font-size: 14px;
  }
`;

const DragAndDrop = () => {
  const initialImages = [
    { id: 1, src: "/icons/ruble.png", alt: "Image 1" },
    { id: 2, src: "/icons/smile.png", alt: "Image 2" },
    { id: 3, src: "/icons/smile.png", alt: "Image 3" },
    { id: 4, src: "/icons/smile.png", alt: "Image 4" },
  ];

  const [items, setItems] = useState(initialImages);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDrop = () => {
    const newItems = [...items];
    const [draggedItem] = newItems.splice(dragItem.current, 1);
    newItems.splice(dragOverItem.current, 0, draggedItem);
    setItems(newItems);
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <DragDropWrapper>
      {items.map((item, index) => (
        <FlexDiv key={item.id}>
          <DraggableImage
            src={item.src}
            alt={item.alt}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          />
          {index < items.length - 1 && <StyledInput defaultValue={1} />}
        </FlexDiv>
      ))}
    </DragDropWrapper>
  );
};

export default DragAndDrop;
