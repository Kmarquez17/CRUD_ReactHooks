import React, { useState } from "react";
import UserTable from "./components/tablas/UserTable";
import AddUserForm from "./components/forms/AddUserForm";
import EditUserForm from "./components/forms/EditUserForm";

const App = () => {
  const userData = [
    { id: 1, name: "Kevin", username: "k_marquez17" },
    { id: 2, name: "Craig", username: "silicone3000" },
    { id: 3, name: "Ben", username: "benisS" }
  ];

  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(userData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(initialFormState);

  /**Add User */
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  /**Delete User */
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  /**Edit User */
  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
console.log(editing)
  return (
    <div className="container">
      <h1>CRUD App con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                updateUser={updateUser}
                currentUser={currentUser}
                setEditing={setEditing}             
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
