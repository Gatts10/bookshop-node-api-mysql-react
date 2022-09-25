import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState([{}]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books/" + id);
        setBook(res.data[0]);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + id, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        text="text"
        name="title"
        defaultValue={book.title}
        onChange={handleChange}
      />
      <input
        text="text"
        name="description"
        defaultValue={book.description}
        onChange={handleChange}
      />
      <input
        text="number"
        name="price"
        defaultValue={book.price}
        onChange={handleChange}
      />
      <input
        text="text"
        name="cover"
        defaultValue={book.cover}
        onChange={handleChange}
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
