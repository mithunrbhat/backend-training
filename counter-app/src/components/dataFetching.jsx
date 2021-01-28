import axios from "axios";
import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFetch, setIdFetch] = useState(1);

  const handleFetch = () => {
    setIdFetch(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idFetch}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFetch]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={handleFetch}>
        Fetch post
      </button>
      {post.email}
    </div>
  );
};

export default DataFetching;
