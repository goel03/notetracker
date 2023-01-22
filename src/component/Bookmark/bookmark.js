import React, { useState, useEffect } from "react";
import send from "../../send.png";
export default function Book() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedbook = JSON.parse(localStorage.getItem("bookmark"));
    if (storedbook) {
      setBookmarks(storedbook);
    }
  }, []);

  const handleBookmarkSubmit = (e) => {
    e.preventDefault();
    const bookmark = e.target.bookmark.value;
    setBookmarks([...bookmarks, bookmark]);
    e.target.bookmark.value = "";
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  };

  var date = new Date().toJSON().slice(0, 10);
  return (
    <div>
      <form onSubmit={handleBookmarkSubmit}>
        <input
          type="text"
          name="bookmark"
          placeholder="Enter bookmark link here"
        />
        <button type="submit">
          <img src={send} alt="img" />
        </button>
      </form>
      <ul className="not">
        {bookmarks.map((bookmark, index) => (
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
            <a href={bookmark}>{bookmark}</a>
            <div style={{ float: "right", padding: "5px" }}>{date}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
