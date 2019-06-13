import React, { useState } from "react";

const AddUserForm = ({addUser}) => {
  const initialState = {
    id: null,
    name: "",
    username: ""
  };

  const [user, setUser] = useState(initialState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!user.name || !user.username) return;

        addUser(user);
        setUser(initialState);

        // console.log(user)
      }}
    >
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>UserName: </label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
