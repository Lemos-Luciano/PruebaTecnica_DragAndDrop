import { useState } from 'react';
import './App.css'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import PdfSectionDesigner from './components/PdfSectionDesigner';


const initialData = {
  "ROOT" : [
  { id: "01", name: "item1" },
  { id: "02", name: "item2" },
  { id: "03", name: "item3" },
],
 "cabezera" : [
  { id: "04", name: "Cabezera1" },
],
  "footer" : [
    { id: "05", name: "Footer1" },
    { id: "06", name: "Footer2" },
  ]
}


function App() {
  const [items, setItems] = useState(initialData)


  const handleDragDrop = (results) => {
    console.log(results);
    const {source, destination, type} = results;

    // si arrastramos a un destino no valido, no hace nada
    if (!destination) return;

    // Si colocamos el item en el mismo sitio, no hace nada
    if (
      source.droppableId === destination.droppableId && 
      source.index === destination.index
      ) 
      return;

    if (type === 'group') {
      // ["item1", "item2", "item3"]
      const reorderedStores = {...items};

      const sourceIndex = source.index
      const destinationIndex = destination.index

      const sourceDroppableID = source.droppableId
      const destinationDroppableID = destination.droppableId


      // if (sourceDroppableID === destinationDroppableID) 

      // creamos un nuevo array con el item removido, indicamos que queremos quitar un elemento
      // ["item2", "item3"]
      const [removeItem] = reorderedStores[sourceDroppableID].splice(sourceIndex, 1);

      // Agrega en el index indicado el elemento elminidado. Se quita 0 y se agrega removeItem
      // ["item2", "item3", "item1"]
      reorderedStores[destinationDroppableID].splice(destinationIndex, 0, removeItem)

      return setItems(reorderedStores);
    }
  }


  return (
    <>
    <h1 className='text-lg font-bold'>Drag and Drop</h1>
    <DragDropContext 
      onDragEnd={handleDragDrop}>
      
      <PdfSectionDesigner items={items} />

    </DragDropContext>

    </>
  )
}

export default App
