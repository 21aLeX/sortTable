import './App.css';
import React, { useState } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  const [column, setColumn] = useState('')
  const [operation, setOperation] = useState('')
  const [condiition, setCondition] = useState('')
  const setState =(column, operation, condiition) => {
    setColumn(column)
    setOperation(operation)
    setCondition(condiition)
    console.log(column)
  }
  return (
    <div className="App">
      <Filter setState = {setState} />
      <Table />
    </div>
  );
}

export default App;
