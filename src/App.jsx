import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
// Components
import PdfSectionDesigner from './components/PdfSectionDesigner'
import Elements from './components/Elements'
// Hooks
import useDragDropHandler from './hooks/useDragDropHandler'

// Generar los tres elementos iniciales con ids únicos usando uuidv4
const generateInitialItems = () => {
	return {
		Elements: [
			{ id: uuidv4(), name: 'text' },
			{ id: uuidv4(), name: 'image' },
			{ id: uuidv4(), name: 'table' },
		],
		Header: [],
		Body: [],
		Footer: [],
	}
}

function App() {
	const { items, handleDragDrop } = useDragDropHandler(generateInitialItems())

	const itemsWithoutElements = Object.entries(items).filter(
		([key]) => key !== 'Elements',
	)
	const itemsElements = Object.entries(items).filter(
		([key]) => key === 'Elements',
	)

	return (
		<div className='flex flex-col'>
			<h1 className='text-lg font-bold'>Drag and Drop</h1>
			<DragDropContext onDragEnd={handleDragDrop}>
				<div className='flex gap-14 p-7 max-lg:flex-col max-lg:items-center'>
					<div className='flex-auto w-64'>
						<PdfSectionDesigner items={itemsWithoutElements} />
					</div>
					<div className='flex-auto w-32'>
						<Elements items={itemsElements} />
					</div>
				</div>
			</DragDropContext>
		</div>
	)
}

export default App
