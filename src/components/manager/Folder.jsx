import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const Folder = ({ folder }) => (
   <Button
     as={Link}
     to={`/folder/${folder.id}`}
     state={{ folder: folder }}
     variant='outline-dark'
     className='text-truncate w-100 p-5' // Increase width and padding
   >
     <FontAwesomeIcon icon={faFolder} style={{ marginRight: '10px'}} />
     {folder.name}
   </Button>
 );
 

export default Folder
