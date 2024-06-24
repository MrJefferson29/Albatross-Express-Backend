import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/tracking?search=${searchTerm}`);
    }

    setSearchTerm("");
  };

  return (
    <Styles>
      <Col md='5' className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div>Ex: 12345</div>
          <input
            type="text"
            required
            className="forms"
            placeholder="Please Input your tracking ID"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
            <button type="submit" className="butt">
              Submit
            </button>
        </form>
      </Col>
    </Styles>
  );
};

export default SearchForm;

const Styles = styled.div`
overflow-x: hidden;
margin-top: 5vh;
.container {
    border-radius: 5px;
    height: 310px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 1px 6px rgba(0, 0, 0, 0.05),
      0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1),
      8px 32px 32px rgba(0, 0, 0, 0.15), 8px 64px 64px rgba(0, 0, 0, 0.15);
  }
  .forms {
    width: 100%;
    height: 45px;
    // border: solid grey;
    padding: 10px;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
    background: none;
    border: none;
  }
  .butt {
    border: 3px solid white;
    border-radius: 5px;
    width: 130px;
    height: 60px;
    margin: 60px;
    background: orange;
    color: black;
    font-weight: 1000;
    font-size: 18px;
    &:hover {
      color: aliceblue;
    }
  }
`;
