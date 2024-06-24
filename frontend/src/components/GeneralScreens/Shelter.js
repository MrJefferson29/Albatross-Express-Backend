import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import { AuthContext } from "../../Context/AuthContext";
import "../../Css/Home.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

const Home = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const search = useLocation().search;
  const searchKey = new URLSearchParams(search).get("search");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  useEffect(() => {
    getStories();
  }, [searchKey, page]);

  const getStories = async () => {
    setLoading(true);
    try {
      let url = `story/getAllStories?page=${page}`;
      if (searchKey) {
        url += `&search=${searchKey}`;
      }
      console.log("Fetching data from:", url);
      const { data } = await axios.get(url);

      setStories(data.data);
      setPages(data.pages);

      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [searchKey]);

  return (
    <div className="Inclusive-home-page">
      <SearchForm />
      {loading ? (
        <div className="skeleton_emp">
          {[...Array(6)].map(() => (
            <SkeletonStory key={uuidv4()} />
          ))}
        </div>
      ) : (
        <div>
          {auth ? (
            <div className="story-card-wrapper">
              {stories?.length !== 0 ? (
                stories.map((story) => (
                  <CardStory key={uuidv4()} story={story} />
                ))
              ) : (
                <NoStories />
              )}
              <img className="bg-planet-svg" src="planet.svg" alt="planet" />
              <img className="bg-planet2-svg" src="planet2.svg" alt="planet" />
              <img className="bg-planet3-svg" src="planet3.svg" alt="planet" />
            </div>
          ) : (
            <div className="story-card-wrapper">
              {searchKey && stories?.length > 0 ? (
                <Link to={`/story/${searchKey}`} className="story-link">
                  <CardStory story={stories[0]} />
                </Link>
              ) : (
                <NoStories />
              )}
            </div>
          )}
          <Pagination page={page} pages={pages} changePage={setPage} />
        </div>
      )}
      <br />
    </div>
  );
};

export default Home;
