import React, {useEffect, useState} from "react";
import Axios from "axios";
import shortid from "shortid";
import MidHook from "./MidHook";
import CONSTANTS from "../constants";

function NotesHook() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notesobj, setNotesobj] = useState([]);

  useEffect(() => {
    Axios.get(CONSTANTS.baseURL)
        .then((res) => {
          setNotesobj(res.data);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(desc);
    let entry = {
      id: shortid.generate(),
      title: title,
      description: desc,
    };
    // console.log(entry);
    Axios.post(`${CONSTANTS.baseURL}add`, entry)
      .then((res) => {
        // console.log(res);
        Axios.get(CONSTANTS.baseURL)
          .then((res) => {
            setNotesobj(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    setTitle("");
    setDesc("");
  };
  const handledatacallback = (idi) => {
    Axios.delete(`${CONSTANTS.baseURL}delete/${idi}`)
      .then((res) => {
        setNotesobj(notesobj.filter((ele) => ele._id !== idi));
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>welcome to Notes App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter Desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      <div className="row m-auto">
        {notesobj.map((ele, index) => {
          return (
            <MidHook
              key={ele.id}
              index={index}
              notid={ele._id}
              notestitle={ele.title}
              notesdesc={ele.description}
              datacallback={handledatacallback}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotesHook;
