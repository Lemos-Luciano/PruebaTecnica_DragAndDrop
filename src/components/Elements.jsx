import React from 'react'

// Hooks
import useGetIcon from '../hooks/useGetIcon';


import { Droppable, Draggable} from "react-beautiful-dnd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Elements = (props) => {

    const { items } = props;



  return (
    <div className='elementContainer'>
      {items.map(([key, value]) => (
        <div key={key} className='flex flex-col gap-3 ' >
          <h2 className='titles'>{key}</h2>
          <Droppable droppableId={key} type='group'>
            {(provided) => (
            // marca el dip dropeable
            <div {...provided.droppableProps} ref={provided.innerRef} className='flex gap-5'>
              {
                (value.length === 0) ? <p>Por favor, agregue algun elemento</p> : (
                value.map((item, index) => 
                  // marca los items dragrables
                  <Draggable draggableId={item.id} key={item.id} index={index} >
                    {(provided) => (
                      <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className='itemsContainer'>
                        <FontAwesomeIcon icon={useGetIcon(item.name)} style={{color: "#3a6b88",}} className='fontAwesomeIcon' />
                        <h3 type="button" id={item.id} className='textElement'>{item.name}</h3>
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
