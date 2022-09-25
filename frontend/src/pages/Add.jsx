import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        text="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <input
        text="text"
        placeholder="description"
        name="description"
        onChange={handleChange}
      />
      <input
        text="number"
        placeholder="price"
        name="price"
        onChange={handleChange}
      />
      <input
        text="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      />
      <button className="formButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Add;
