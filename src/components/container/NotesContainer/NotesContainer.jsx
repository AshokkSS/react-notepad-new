import Note from "../../presentational/Note";
import NoteForm from "../NoteForm";
import React, { useState } from "react";

const NotesContainer = () => {
  const [notes, setNotes] = useState([]);

  const handleFormSubmit = (title, content, date) => {
    const newNote = {
      title,
      content,
      date
    };

    setNotes([...notes, newNote]);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NoteForm onSubmit={handleFormSubmit} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <Note title={note.title} date={note.date} content={note.content} />
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
