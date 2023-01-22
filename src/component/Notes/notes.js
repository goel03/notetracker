import React, { useState, useEffect } from "react";
import send from "../../send.png";
export default function notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    const note = e.target.note.value;
    setNotes([...notes, note]);
    e.target.note.value = "";
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  var date = new Date().toJSON().slice(0, 10);
  return (
    <div>
      <form onSubmit={handleNoteSubmit}>
        <input type="text" name="note" placeholder="ENTER NOTE HERE " />

        <button type="submit">
          <img src={send} alt="img" />
        </button>
      </form>

      <ul className="not">
        {notes.map((note, index) => (
          <div
            key={index}
            style={{
              marginBottom: "5px",
              height: "40px",
              width: "max",
              backgroundColor: "#FAD6CF",
              border: "2px solid lightyellow",
              paddingLeft: "10px",
              paddingTop: "10px"
            }}
          >
            {note}

            <div style={{ float: "right", padding: "5px" }}>{date}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
