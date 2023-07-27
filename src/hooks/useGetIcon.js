import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'


const useGetIcon = () => (itemName) => {
        if (itemName === 'text') {
          return faAlignJustify;
        } else if (itemName === 'table') {
          return faTable;
        } else if (itemName === 'image') {
          return faImage;
        } else {
          return null;
        }
}

export default useGetIcon