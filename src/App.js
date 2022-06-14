import './App.css';
import React, { useState, useMemo } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  const [column, setColumn] = useState('')
  const [operation, setOperation] = useState('')
  const [condiition, setCondition] = useState('')

  const array = [{
    date:'20/05/2022',
    title: 'help',
    amount: 4, 
    distace:67}]

    let arr = array

  const setIf = (column, operation, condiition) => {
    setColumn(column)
    setOperation(operation)
    setCondition(condiition)
    console.log(column + ' ' + operation + ' ' + condiition)
  }

  useMemo(() => {
    if (column !==  '' & operation !== ''  & condiition !== '') {
      if((column === 'amount' || column === 'distance') && !isNaN(condiition)){
       
      arr = array.filter(a => 
       { if(a[column]+operation+condiition) return true}
         )
         console.log(arr)
      }
    }
  }, [column, operation, condiition])
  return (
    <div className="App">
      <Filter setIf={setIf} />
      <Table array = {arr} />
    </div>
  );
}

export default App;
