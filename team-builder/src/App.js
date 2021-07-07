import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import Card from "./components/Card"
function App() {
  const [members, setMember] = useState([
    {
      id: 1,
      name: "ralph",
      email: "ralph@email.com",
      role: "engineer",

    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
  };
  setMember([...members, newMember]);
  };

  return(
    <div className="App">
      <h1>Members</h1>
        <Form addNewMember={addNewMember} />
        <Card members={members} />

    </div>
  
   );
}




export default App;
