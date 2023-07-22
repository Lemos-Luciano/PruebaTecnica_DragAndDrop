import { useState } from 'react';
import './App.css'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"


const initialData = [
  { id: "01", name: "item1" },
  { id: "02", name: "item2" },
  { id: "03", name: "item3" },
];


function App() {
  const [items, setItems] = useState(initialData)

  // const items = initialData

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
      const reorderedStores = [...items];

      const sourceIndex = source.index
      const destinationIndex = destination.index

      // creamos un nuevo array con el item removido, indicamos que queremos quitar un elemento
      // ["item2", "item3"]
      const [removeItem] = reorderedStores.splice(sourceIndex, 1);

      // Agrega en el index indicado el elemento elminidado. Se quita 0 y se agrega removeItem
      // ["item2", "item3", "item1"]
      reorderedStores.splice(destinationIndex, 0, removeItem)

      return setItems(reorderedStores);

    }
  }


  return (
    <>
    <h1 className='text-lg font-bold'>Drag and Drop</h1>
    <DragDropContext 
      onDragEnd={handleDragDrop}>
      {/* Aclaramos el id del droppable y el grupo */}
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          // marca el dip dropeable
          <div {...provided.droppableProps} ref={provided.innerRef} className='bg-cyan-600 p-2 rounded-2xl'>
            {
              items.map((item, index) => 
                // marca los items dragrables
                <Draggable draggableId={item.id} key={item.id} index={index} >
                  {(provided) => (
                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                      <h3 type="button" id={item.id} className='my-1 mx-32 border border-green-500 bg-green-500 text-white rounded-md hover:bg-green-600'>{item.name}</h3>
                    </div>
                  )}
                </Draggable>)
            }
            {/* agrega un placeholder cuando arrastramos un elemento para que el contenedor no se reduzca de tamaño */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  )
}

export default App
