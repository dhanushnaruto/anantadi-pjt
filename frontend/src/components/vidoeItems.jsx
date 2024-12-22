import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VideoItems(props) {
    const {items} = props
    const {link, keywords} = items
    const url = `https://www.youtube.com/embed/${link}?rel=0&mute=1`


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='col-12 col-md-6 col-lg-4 video-items' >
        <div class="ratio ratio-16x9">
            <iframe src={url} title="YouTube video" allowfullscreen></iframe>
        </div>
        <h4 className='mt-3'>This Video is {keywords}</h4>

        <>
      <Button onClick={handleShow}>
        <FaPlay/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Watch {keywords}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class="ratio ratio-16x9">
                <iframe src={url} title="YouTube video" allowfullscreen></iframe>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default VideoItems