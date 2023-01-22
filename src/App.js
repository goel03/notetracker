import "./styles.css";
import React, { useState } from "react";
import Notes from "../src/component/Notes/notes";
import Book from "../src/component/Bookmark/bookmark";

const App = () => {
  const [tab, setTab] = useState("notes");

  const handleTabChange = (e) => {
    setTab(e.target.value);
  };

  return (
    <div>
      <div className="tab">
        <div className="daily"> DAILY NOTE TRACKER</div>

        <button value="notes" onClick={handleTabChange}>
          Daily Notes{" "}
        </button>
        <button value="bookmarks" onClick={handleTabChange}>
          {" "}
          Bookmarks
        </button>

        {tab === "notes" && <Notes />}
        {tab === "bookmarks" && <Book />}
      </div>
    </div>
  );
};

export default App;
