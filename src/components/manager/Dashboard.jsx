import { Container } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'

import { useFolder } from '../../hooks/useFolder'

import {
   AddFileBtn,
   AddFolderBtn,
 
   Breadcrumbs,
   File,
   Folder,
   Navbar,
} from '.'

const Dashboard = () => {
   const { folderId } = useParams()
   const state = (useLocation().state !== null)
      ? useLocation().state
      : { folder: null }

   const {
      childFiles,
      childFolders,
      folder,
   } = useFolder(state.folder, folderId)

   return (
      <>
         <Navbar />
         <Container fluid className='px-5'>
            <div className='d-flex align-items-center my-2'>
               <Breadcrumbs currentFolder={folder} />
               <AddFolderBtn currentFolder={folder} />
               <AddFileBtn currentFolder={folder} />
            
            </div>
            {childFolders.length > 0 && (
                 <div className="folder">

                  <h2 style={{position:'relative' }}>Folders</h2>
                 
               <div className='d-flex flex-wrap'>

                
                  {childFolders.map(childFolder => (
                     <div
                        key={childFolder.id}
                        style={{ maxWidth: '1000px' , }}
                        className='p-2'
                     >
                        <Folder folder={childFolder} />
                     </div>
                  ))}
               </div>
               </div>
            )}

            {childFolders.length > 0 && childFiles.length > 0 && (<hr />)}

            {childFiles.length > 0 && (
                <div className='files'>
              <h2 style={{position:'relative' }}>Files</h2>
               <div className='d-flex flex '>


                  {childFiles.map(childFile => (
                     <div
                        key={childFile.id}
                        style={{ maxWidth: '1000px' }}
                        className='p-2'
                     >
                        <File file={childFile}/>
                     </div>
                  ))}
               </div>
               </div>
            )}
         </Container>
      </>
   )
}

export default Dashboard
