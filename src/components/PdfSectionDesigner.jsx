import React from 'react'
import { Droppable, Draggable} from "react-beautiful-dnd"


const PdfSectionDesigner = (props) => {

  const { items } = props;
  return (
    <div>
      {Object.entries(items).map(([key, value]) => (
        <div key={key}>
          <h2 className='text-lg font-bold text-left'>{key}</h2>
          <Droppable droppableId={key} type='group'>
            {(provided) => (
            // marca el dip dropeable
            <div {...provided.droppableProps} ref={provided.innerRef} className='bg-cyan-600 p-2 rounded-2xl'>
              {
                value.map((item, index) => 
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
      </div>
      ))}
    </div>
  )
}

export default PdfSectionDesigner

