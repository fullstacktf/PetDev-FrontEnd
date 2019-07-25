import React, { useState } from "react";

/* const InputField = styled.input`
  color: ${props => props.theme.error ? 'red' : 'black'};
  font-weight: ${props => props.theme.error ? 'bold' : 'normal'};
`; */
const initialValue = {
  email: "",
  password: "",
  age: ""
};

const Input: any = ({ name, type = "text", label, value, handleChange }) => {
  return (
    <Input>
      {label}:
      <input
        name={name}
        type={type}
        value="{value[name]} "
        onChange={handleChange}
      />
    </Input>
  );
};

const FIELDS = [
  { label: "Email", name: "email" },
  { label: "Password", type: "password", name: "password" },
  { label: "Color", name: "color" }
];

export const Login = () => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value });

  const handleOnClick = event => {
    event.preventDefault();
    console.log("DoLogin", formData);
  };

  return (
    <div>
      <form>
        {FIELDS.map((field, i) => (
          <Input handleChange={handleChange} key={i} value={formData} {...field} />
        ))}
        <button onClick={handleOnClick}>Login</button>
      </form>
    </div>
  );
};
