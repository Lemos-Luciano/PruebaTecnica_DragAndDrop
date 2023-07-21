import './App.css'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"


const initialData = [
  { id: "01", name: "item1" },
  { id: "02", name: "item2" },
  { id: "03", name: "item3" },
];


function App() {

  const items = initialData


  return (
    <>
    <h1 className='text-lg font-bold'>Drag and Drop</h1>
    <DragDropContext onDragEnd={() => {console.log("drag drog event ocurred");}}>
      {/* Aclaramos el id del droppable y el grupo */}
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          // marca el dip dropeable
          <div {...provided.droppableProps} ref={provided.innerRef} className='bg-cyan-600 p-2'>
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
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  )
}

export default App
