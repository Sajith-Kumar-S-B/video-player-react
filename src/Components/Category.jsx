import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  deleteACategory,
  deleteAVideo,
  getAVideo,
  getCategory,
  saveCategory,
  updateCategory,
} from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";

function Category() {
  const [show, setShow] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [categoryName, setCateoryName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async () => {
    if (categoryName) {
      const body = {
        categoryName,
        allVideos: [],
      };
      // make api call
      const response = await saveCategory(body);

      if (response.status >= 200 && response.status < 300) {
        // hide modal
        handleClose();
        // reset state
        setCateoryName("");
        getAllAddCategory();
      } else {
        toast.warning("Uploading error..perform operation after sometime");
      }
    } else {
      toast.info("Please enter Category Name");
    }
  };

  const handleDeleteCategory = async (id) => {
    // make api call
    await deleteACategory(id);
    // get all category
    getAllAddCategory();
  };

  const getAllAddCategory = async () => {
    const { data } = await getCategory();
    setAllCategory(data);
  };
  console.log(allCategory);

  const dragOver = (e) => {
    console.log("Dragging over the category");
    e.preventDefault();
  };

  const videoDropped = async (e, categoryId) => {
    // console.log("Inside Category Id"+ categoryId);
    const videoCardId = e.dataTransfer.getData("cardId");
    // console.log("VideoCard Id"+videoCardId);
    // get details of video dropped
    const { data } = await getAVideo(videoCardId);
    console.log(data);
    // get details category
    const selectedCategory = allCategory.find((item) => item.id === categoryId);
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);
    await updateCategory(categoryId, selectedCategory);
    getAllAddCategory();

  };

  useEffect(() => {
    getAllAddCategory();
    
  }, []);

  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-primary">
          Add New Category
        </button>
      </div>

      {allCategory.length > 0 ? (
        allCategory?.map((item) => (
          <div
            className="border border-2 mb-3 mt-3 p-3"
            droppable
            onDrop={(e) => videoDropped(e, item?.id)}
            onDragOver={(e) => dragOver(e)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item?.categoryName}</h6>
              <button
                className="btn"
                onClick={() => handleDeleteCategory(item?.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            {item?.allVideos && (
              <Row>
                {item?.allVideos.map((card) => (
                  <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}} sm={12}>
                    <VideoCard displayData={card}   />
                  </Col>
                ))}
              </Row>
            )}
          </div>
        ))
      ) : (
        <p className="fw-bolder mt-3 fs-5 text-danger">Nothing to display</p>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="mb-3">Enter Category Name</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCateoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Category;
