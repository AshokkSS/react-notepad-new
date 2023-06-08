import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Header, NoteForm, Note, NotesContainer } from "./components";

function App() {
  return (
    <AppContainer>
      <Header titleContent="Ashokk's React Notepad" />
      {/* <NoteForm /> */}
      {/* <Note title="Reminder" content="Buy groceries for the week." /> */}
      <NotesContainer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`;
