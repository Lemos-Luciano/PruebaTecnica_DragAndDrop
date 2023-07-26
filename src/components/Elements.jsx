import React from 'react'
import { Droppable, Draggable} from "react-beautiful-dnd"



const Elements = (props) => {

    const { items } = props;

  return (
    <div>
      {items.map(([key, value]) => (
        <div key={key}>
          <h2 className='text-lg font-bold text-left'>{key}</h2>
          <Droppable droppableId={key} type='group'>
            {(provided) => (
            // marca el dip dropeable
            <div {...provided.droppableProps} ref={provided.innerRef} className='flex'>
              {
                (value.length === 0) ? <p>Por favor, agregue algun elemento</p> : (
                value.map((item, index) => 
                  // marca los items dragrables
                  <Draggable draggableId={item.id} key={item.id} index={index} >
                    {(provided) => (
                      <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className='w-16 h-16 rounded-md border border-neutral-neutral-200 bg-neutral-neutral-00 shadow-elevation-01'>
                        <h3 type="button" id={item.id} className=''>{item.name}</h3>
                      </div>
                    )}
                  </Draggable>))
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

export default Elements
