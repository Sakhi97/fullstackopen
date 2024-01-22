import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const addPersona = (event) => {
    event.preventDefault();

    const isPersonExist = persons.some(person => person.name === newName);
    
    if (isPersonExist) {
      setAlertMessage(`${newName} already exists in the phonebook!`);
      alert(alertMessage)
    } else {
      setPersons([...persons, { name: newName }]);
      setNewName('');
      setAlertMessage('');
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersona}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, index) => (
          <div key={index}>{person.name}</div>
        ))}
    </div>
  );
};

export default App;
