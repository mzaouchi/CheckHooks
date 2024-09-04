import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
   
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd=()=>{ 
        setMovies([...movies,{title,description,posterURL,rating,id : Math.random()}])
        handleClose()
    }
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />      
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />      
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Enter photo" />      
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Rating</Form.Label>
                    <br/>
                    <Rating onChange={(e)=> setRating(e.target.value)}/>     
                </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddMovie