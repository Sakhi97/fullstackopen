import React, { useState } from 'react';
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


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

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h3>Add a new</h3>

      <PersonForm
        addPersona={addPersona}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};
export default App;
