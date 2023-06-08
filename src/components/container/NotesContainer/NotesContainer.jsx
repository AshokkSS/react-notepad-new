import Note from "../../presentational/Note";
import NoteForm from "../NoteForm";
import React, { useState } from "react";
import styled from "styled-components";

const NotesContainer = () => {
  const [notes, setNotes] = useState([]);

  const handleFormSubmit = (title, content, date) => {
    const newNote = {
      id: new Date().getTime(),
      title,
      content,
      date
    };

    setNotes([...notes, newNote]);
  };
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container>
      <FormWrapper>
        <NoteForm onSubmit={handleFormSubmit} />
      </FormWrapper>
      {notes.length > 0 ? (
        <NotesGridWrapper>
          <NotesGrid>
            {notes.map((note) => (
              <Note
                key={note.id} // Using id as key for each Note component
                id={note.id}
                onDelete={handleDelete}
                title={note.title}
                date={note.date}
                content={note.content}
              />
            ))}
          </NotesGrid>
        </NotesGridWrapper>
      ) : (
        <Title>No notes saved!</Title>
      )}
    </Container>
  );
};

export default NotesContainer;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const FormWrapper = styled.div`
  margin-right: 20px;
`;

const NotesGridWrapper = styled.div`
  flex-grow: 1;
`;

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
  height: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  position: relative;
  color: black;
  width: 100%;
  font-weight: 700;
  font-size: 26px;
`;
