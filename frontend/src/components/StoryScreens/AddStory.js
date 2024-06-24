import React, { useRef, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AuthContext } from "../../Context/AuthContext";
import { FiArrowLeft } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";
import b2 from '../../Assets/b2.jpg'
import "../../Css/AddStory.css";

const AddStory = () => {
  const { config } = useContext(AuthContext);
  const imageEl = useRef(null);
  const editorEl = useRef(null);
  const [image, setImage] = useState("");
  const [slide, setSlide] = useState("");
  const [depart, setDepart] = useState("");
  const [insurrance, setInsurrance] = useState("");
  const [receiver, setReceiver] = useState("");
  const [expect, setExpect] = useState("");
  const [weight, setWeight] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const clearInputs = () => {
    setTitle("");
    setContent("");
    setDepart("");
    setSlide("");
    setWeight("");
    setInsurrance("");
    setExpect("");
    setReceiver("");
    setImage("");
    editorEl.current.editor.setData("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("image", image);
    formdata.append("content", content);
    formdata.append("depart", depart);
    formdata.append("slide", slide);
    formdata.append("weight", weight);
    formdata.append("insurrance", insurrance);
    formdata.append("expect", expect)
    formdata.append("receiver", receiver)

    try {
      const { data } = await axios.post("/story/addstory", formdata, config);
      setSuccess("Chi Posted Succesfully, GOOD JOB!");

      clearInputs();
      setTimeout(() => {
        setSuccess("");
      }, 7000);
    } catch (error) {
      setTimeout(() => {
        setError("");
      }, 7000);
      setError(error.response.data.error);
    }
  };
  return (
    <div className="Inclusive-addStory-page ">
      <Link to={"/"}>
        <FiArrowLeft />
      </Link>
      <form onSubmit={handleSubmit} className="addStory-form">
        {error && <div className="error_msg">{error}</div>}
        {success && (
          <div className="success_msg">
            <span>{success}</span>
            <Link to="/" style={{ color: "bisque", fontWeight: "900" }}>
              Go home
            </Link>
          </div>
        )}

        <Row>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="title"
              required
              placeholder="Tracking ID"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus={true}
            />
            <input
              className="inpu"
              type="range"
              id="slide"
              min="0"
              max="100"
              step="1"
              onChange={(e) => setSlide(e.target.value)}
              value={slide}
              style={{ backgroundImage: `url(${b2})` }}
            />

            <input
              className="inp"
              type="text"
              required
              id="insurrance"
              placeholder="How much is Insurrance fee"
              onChange={(e) => setInsurrance(e.target.value)}
              value={insurrance}
            />
             <input
              className="inp"
              type="text"
              required
              id="expect"
              placeholder="When is the package to be received"
              onChange={(e) => setExpect(e.target.value)}
              value={expect}
            />
          </Col>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="weight"
              placeholder="Package Weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />

            <select
              className="inp"
              required
              id="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            >
              <option value="" disabled>
                Select Package Status
              </option>
              <option value="transit">On Transit</option>
              <option value="delivered">Delivered</option>
              <option value="delayed">Delayed</option>
              <option value="denied">Denied</option>
              {/* Add more options as needed */}
            </select>
            <input
              className="inp"
              type="text"
              placeholder="When was package shipped"
              onChange={(e) => setDepart(e.target.value)}
              value={depart}
              id="depart"
            />
             <input
              className="inp"
              type="text"
              required
              id="receiver"
              placeholder="Name an address of receiver"
              onChange={(e) => setReceiver(e.target.value)}
              value={receiver}
            />
          </Col>
        </Row>
        <button type="submit" className="addStory-btn">
          Publish{" "}
        </button>
      </form>
    </div>
  );
};

export default AddStory;
