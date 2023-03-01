import { useState } from "react";
import { FormContainer, Label, Button } from "./Form.styled";

const Form = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleBorderColor, setTitleBorderColor] = useState("#212121");
  const [descriptionBorderColor, setDescriptionBorderColor] =
    useState("#212121");

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "title") {
      setTitle(value);
      setTitleBorderColor("#212121");
      return;
    } else if (name === "description") {
      setDescription(value);
      setDescriptionBorderColor("#212121");
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setTitleBorderColor("#FFA07A");
      return alert("Field title is empty");
    } else if (description === "") {
      setDescriptionBorderColor("#FFA07A");
      return alert("Field description is empty");
    }
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Title
        <input
          style={{ borderColor: titleBorderColor, width: "200px" }}
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={onChange}
        />
      </Label>
      <Label>
        Description
        <input
          style={{ borderColor: descriptionBorderColor, width: "200px" }}
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={onChange}
        />
      </Label>
      <Button type="submit">Create</Button>
    </FormContainer>
  );
};

export default Form;
