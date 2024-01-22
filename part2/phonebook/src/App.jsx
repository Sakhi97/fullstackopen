import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [alertMessage, setAlertMessage] = useState('');


  const addPersona = (event) => {
    event.preventDefault();

    const isPersonExist = persons.some(person => person.name === newName);

    if (isPersonExist) {
      setAlertMessage(`${newName} already exists in the phonebook!`);
      alert(alertMessage);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName('');
      setNewNumber('');
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
          number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
