import React from "react";
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { getFirestore, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Button, Form, Modal } from 'react-bootstrap'
 

const File = ({ file}) => {
  
  const [open, setOpen] = useState(false)
   const [fname, setfName] = useState('Renamed_File')
   
   const openModal = () => setOpen(true)
   const closeModal = () => setOpen(false)


  const database = getFirestore();
  const handleDelete = async () => {
    try {
     

      // Delete the file entry from the database
      await deleteDoc(doc(database, "files", file.id));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const handleRename = async (e) => {
    e.preventDefault();
    
    try {

      const newName = fname;
      // Update the file entry in the database with the new name
      const fileDocRef = doc(database, "files", file.id);
      await updateDoc(fileDocRef, { name: newName });
    } catch (error) {
      console.error("Error renaming file:", error);
    }
    // setfName('')
    closeModal()
  };
  return (
    <>
      <Card style={{ width: "18rem", margin: "1rem", padding: "0.5rem" }}>
        <Card.Header>
          {" "}
          <a
            style={{ marginLeft: "0.1rem", padding: "1rem" }}
            href={file.url}
            target="_blank"
            className="btn btn-outline-dark text-truncate w-100"
          >
            <FontAwesomeIcon icon={faFile} style={{ marginRight: "10px" }} />
            {file.name}
          </a>
        </Card.Header>
        <Card.Body style={{ display: "flex" }}>
          <Button
            style={{ marginRight: "3rem", marginLeft: "2rem" }}
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            style={{}}
            variant="primary"
            onClick={openModal}
          >
            Rename
          </Button>
        </Card.Body>
      </Card>


      <Modal show={open} onHide={closeModal}>
            <Form onSubmit={handleRename}>
               <Modal.Body>
                  <Form.Group>
                     <Form.Label>Folder Name</Form.Label>
                     <Form.Control
                        type='text'
                        value={fname}
                        onChange={(e) => setfName(e.target.value)}
                        required
                     />
                  </Form.Group>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant='secondary' onClick={closeModal}>
                     Close
                  </Button>
                  <Button variant='success' type="submit" >
                    Rename
                  </Button>
               </Modal.Footer>
            </Form>
         </Modal>
    </>
  );
};

export default File;
