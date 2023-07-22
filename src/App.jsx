import { useState } from 'react';
import './App.css'
import {DragDropContext} from "react-beautiful-dnd"
import PdfSectionDesigner from './components/PdfSectionDesigner';
import { v4 as uuidv4 } from 'uuid';

import useCustomAlert from './hooks/useCustomAlert';





const data = {
  "ROOT" : [
  { id: "01", name: "item1" },
  { id: "02", name: "item2" },
  { id: "03", name: "item3" },
],
 "cabezera" : [
  { id: "04", name: "Cabezera1" },
],
  "body" : [
    { id: "05", name: "body1" },
    { id: "06", name: "body2" },
  ],
  "footer" : [
    { id: "07", name: "footer1" },
  ],

}
// Generar los tres elementos iniciales con ids únicos usando uuidv4
const generateInitialItems = () => {
  return {
    "ROOT" : [
      { id: uuidv4(), name: "text" },
      { id: uuidv4(), name: "image" },
      { id: uuidv4(), name: "table" },
    ],
    "Header" : [],
    "Body" : [],
    "Footer" : [],
  };
};


function App() {

  const [items, setItems] = useState(generateInitialItems());

  const showAlert = useCustomAlert();


  const itemsWithoutROOT = Object.entries(items).filter(([key]) => key !== "ROOT");
  const itemsROOT =  Object.entries(items).filter(([key]) => key === "ROOT");



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

      const nameSelectedItem = reorderedStores[sourceDroppableID][sourceIndex].name

      if (sourceDroppableID==="ROOT" && destinationDroppableID==="ROOT") return;
      if (sourceDroppableID!=="ROOT" && destinationDroppableID==="ROOT") return;

      // Requisitos especiales
      if (sourceDroppableID!=="Header" && destinationDroppableID==="Header" && nameSelectedItem!=="image") 
        return showAlert("Por orden suprema, solo se pueden agregar imagenes al header.");

      if (sourceDroppableID!=="Footer" && destinationDroppableID==="Footer" && nameSelectedItem!=="text") 
      return showAlert("Por orden suprema, solo se pueden agregar textos al footer.");



      // Del Root a cualquiera
      if (sourceDroppableID==="ROOT" && destinationDroppableID!=="ROOT") {
        const newItem = { id: uuidv4(), name: nameSelectedItem }
        reorderedStores[destinationDroppableID].splice(destinationIndex, 0, newItem)
        return reorderedStores
      };

      // EN CASO RESTANTE, De cualquiera menos root a cualquiera menos root
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
      
      <div className='flex justify-center gap-7'>
        <PdfSectionDesigner items={itemsWithoutROOT} className='basis-3/4'/>
        <div >
          <PdfSectionDesigner items={itemsROOT} className='basis-1/4 bg-cyan-600 p-2 rounded-2xl'/>
        </div>
      </div>

    </DragDropContext>

    
    </>
  )
}

export default App
