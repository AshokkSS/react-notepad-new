import React, { useState } from "react";
import styled from "styled-components";

function NoteForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    note: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData.title, formData.note, formData.date);
    setFormData({
      title: "",
      date: "",
      note: ""
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>New Note</h2>
      <input
        type="text"
        placeholder="Title"
        className="form--input"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        className="form--input"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />
      <textarea
        placeholder="Note"
        className="form--input"
        name="note"
        value={formData.note}
        onChange={handleInputChange}
        rows={15}
        required
      />
      <SubmitButton>Add To Notes</SubmitButton>
    </Form>
  );
}

export default NoteForm;

const Form = styled.form`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 20px 48px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  .form--input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    transition: border-color 0.3s ease;
    &:focus {
      border-color: #008cba;
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  height: 50px;
  margin-top: 16px;
  border-radius: 8px;
  width: 100%;
  border: none;
  color: white;
  background-color: #008cba;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005f8a;
  }
`;
