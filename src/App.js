import './App.css';
import React, { useState } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  const [column, setColumn] = useState('')
  const [operation, setOperation] = useState('')
  const [condiition, setCondition] = useState('')
  const setIf =(column, operation, condiition) => {
    setColumn(column)
    setOperation(operation)
    setCondition(condiition)
    console.log(operation)
  }
  return (
    <div className="App">
      <Filter setIf = {setIf} />
      <Table />
    </div>
  );
}

export default App;
