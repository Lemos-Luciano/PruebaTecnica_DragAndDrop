import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useCustomAlert from './useCustomAlert';

const useDragDropHandler = (initialItems) => {
  const [items, setItems] = useState(initialItems);
  const showAlert = useCustomAlert();

  const handleDragDrop = (results) => {
    console.log(results);
    const { source, destination, type } = results;
    let reorderedStores = { ...items };

    if (source.droppableId === "ROOT" && !destination) return;
    if (source.droppableId !== "ROOT" && !destination) return (reorderedStores[source.droppableId].splice(source.index, 1));

    if (source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === 'group') {
      const sourceIndex = source.index
      const sourceDroppableID = source.droppableId

      const destinationIndex = destination.index
      const destinationDroppableID = destination.droppableId

      const nameSelectedItem = reorderedStores[sourceDroppableID][sourceIndex].name

      if (sourceDroppableID === "ROOT" && destinationDroppableID === "ROOT") return;
      if (sourceDroppableID !== "ROOT" && destinationDroppableID === "ROOT") return;

      if (sourceDroppableID !== "Header" && destinationDroppableID === "Header" && nameSelectedItem !== "image")
        return showAlert("Por suprema orden, solo se permiten agregar imágenes al Header.");

      if (sourceDroppableID !== "Footer" && destinationDroppableID === "Footer" && nameSelectedItem !== "text")
        return showAlert("Por suprema orden, solo se permiten agregar textos al Footer.");

      if (sourceDroppableID === "ROOT" && destinationDroppableID !== "ROOT") {
        const newItem = { id: uuidv4(), name: nameSelectedItem }
        reorderedStores[destinationDroppableID].splice(destinationIndex, 0, newItem)
        return reorderedStores
      };

      const [removeItem] = reorderedStores[sourceDroppableID].splice(sourceIndex, 1);
      reorderedStores[destinationDroppableID].splice(destinationIndex, 0, removeItem)

      return setItems(reorderedStores);
    }
  }

  return { items, handleDragDrop };
};

export default useDragDropHandler;
