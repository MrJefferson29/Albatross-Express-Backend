import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../Css/DetailStory.css";
import Loader from "../GeneralScreens/Loader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiArrowLeft } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const DetailStory = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [activeUser, setActiveUser] = useState({});
  const [story, setStory] = useState({});
  const [storyLikeUser, setStoryLikeUser] = useState([]);
  const [sidebarShowStatus, setSidebarShowStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const slug = useParams().slug;
  const [storyReadListStatus, setStoryReadListStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetailStory = async () => {
      setLoading(true);
      var activeUser = {};
      try {
        const { data } = await axios.get("/auth/private", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        activeUser = data.user;

        setActiveUser(activeUser);
      } catch (error) {
        setActiveUser({});
      }

      try {
        const { data } = await axios.post(`/story/${slug}`, { activeUser });
        setStory(data.data);
        setLikeStatus(data.likeStatus);
        setLikeCount(data.data.likeCount);
        setStoryLikeUser(data.data.likes);
        setLoading(false);

        const story_id = data.data._id;

        if (activeUser.readList) {
          if (!activeUser.readList.includes(story_id)) {
            setStoryReadListStatus(false);
          } else {
            setStoryReadListStatus(true);
          }
        }
      } catch (error) {
        setStory({});
        navigate("/not-found");
      }
    };
    getDetailStory();
  }, [slug, setLoading]);

  const handleLike = async () => {
    setTimeout(() => {
      setLikeStatus(!likeStatus);
    }, 1500);

    try {
      const { data } = await axios.post(
        `/story/${slug}/like`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setLikeCount(data.data.likeCount);
      setStoryLikeUser(data.data.likes);
    } catch (error) {
      setStory({});
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this post")) {
      try {
        await axios.delete(`/story/${slug}/delete`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editDate = (createdAt) => {
    const d = new Date(createdAt);
    var datestring =
      d.toLocaleString("eng", { month: "long" }).substring(0, 3) +
      " " +
      d.getDate();
    return datestring;
  };

  const addStoryToReadList = async () => {
    try {
      const { data } = await axios.post(
        `/user/${slug}/addStoryToReadList`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setStoryReadListStatus(data.status);

      document.getElementById("readListLength").textContent =
        data.user.readListLength;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="Inclusive-detailStory-page">
            <div className="top_detail_wrapper">
              <div className="story-general-info">
              <Link to={"/"}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft}
                      style={{ fontSize: "2rem", color: "black" }}
                    />
              </Link>
                {activeUser &&
                story.author &&
                story.author._id === activeUser._id ? (
                  <div className="top_story_transactions">
                    <Link
                      className="editStoryLink"
                      to={`/story/${story.slug}/edit`}
                    >
                      <FiEdit />
                    </Link>
                    <span
                      style={{ justifyContent: "end" }}
                      className="deleteStoryLink"
                      onClick={handleDelete}
                    >
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
            <Row style={{ padding: "30px", background: "#dddcdc" }}>
              <Row className="story-content">
                <div>
                  <p style={{ fontWeight: "800", fontSize: "1.4rem" }}>
                    Tracking ID:{" "}
                    <font
                      style={{
                        fontSize: "1.5rem",
                        letterSpacing: "2px",
                        fontWeight: "bolder",
                      }}
                    >
                      {story.title}
                    </font>
                  </p>
                  <div
                    style={{
                      float: "right",
                      border: "8px solid black",
                      width: "210px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      boxShadow: "3px 6px 10px black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.9rem",
                        fontWeight: "900",
                        fontFamily: "Gaqire",
                        marginTop: "9px",
                      }}
                    >
                      {story.content}
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  To be received by {story.receiver}
                </p>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Began transit on{" "}
                  <font
                    style={{
                      fontSize: "1.5rem",
                      letterSpacing: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {story.depart}
                  </font>{" "}
                  and should be expected in{" "}
                  <font
                    style={{
                      fontSize: "1.5rem",
                      letterSpacing: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    {story.expect}
                  </font>
                </p>
                <h3 className="girl">Package Weight and Dimensions.</h3>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Weight:{" "}
                  <font style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                    {story.weight}
                  </font>
                </p>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Dimensions: Undefined
                </p>
                <h2 className="girl">Delivery Notes:</h2>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Please ensure someone is available to receive the package. If
                  you have specific delivery preferences or instructions,
                  contact our customer service.
                </p>
                <h2 className="girl">Proof of Delivery:</h2>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Upon delivery, the package will require a signature from the
                  recipient. The proof of delivery with the recipient's name and
                  signature will be available on our tracking portal.
                </p>
                <h2 className="girl">Exception Notifications</h2>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  In case of any delivery issues or exceptions, you will receive
                  timely notifications. For further assistance, please contact
                  our customer service.
                </p>
                <h2 className="girl">Insurrance Informtion</h2>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Your shipment is insured up to $100. Conditions apply. For
                  details, please refer to our insurance policy.
                </p>
                <h2 className="girl">Weather Conditions:</h2>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Please note that weather conditions may impact delivery
                  schedules. We monitor weather updates to minimize any
                  disruptions.
                </p>
                <h2 className="girl">Contact Information</h2>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  For assistance or inquiries, our customer support team can be
                  reached at vishislogistics@gmail.com or (800) 789-0123.
                </p>
                <p style={{ fontSize: "1.3rem", fontWeight: "800" }}>
                  Thank you for choosing Vishis Logistics. We appreciate
                  your trust and look forward to delivering your package with
                  care and efficiency. For real-time updates and additional
                  information, visit our tracking portal at
                  www.vishislogistics.com/tracking.
                </p>
              </Row>
              <div className="range-slider-container">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={story.slide}
                  className="range-slider"
                />
                <div className="slider-thumb">
                  <FontAwesomeIcon icon={faTruck} />
                </div>
              </div>
            </Row>
          </div>
        </>
      )}
    </Styles>
  );
};

export default DetailStory;

const Styles = styled.div``;
