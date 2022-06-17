import './App.css';
import React, { useState, useMemo } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
// import GetData from './components/bd';

function App() {
  const [column, setColumn] = useState('')
  const [operation, setOperation] = useState('')
  const [condiition, setCondition] = useState('')
// const bd = GetData.getAll()

  const array = [{
    date: '20/05/2022',
    title: 'help',
    amount: 4,
    distance: 8,
  },
  {
    date: '06/06/2022',
    title: 'please',
    amount: 6,
    distance: 12,
  },
  {
    date: '20/05/2022',
    title: 'me',
    amount: 2,
    distance: 4,
  }]

  let arr = array

  const setIf = (column, operation, condiition) => {
    setColumn(column)
    setOperation(operation)
    setCondition(condiition)
    console.log(column + ' ' + operation + ' ' + condiition)
  }

  useMemo(() => {
    if (column !== '' & operation !== '' & condiition !== '') {
      if(operation == 'включает'){
        arr = array.filter(a => 
         String (a[column]).toLowerCase().includes(condiition)
        )
      }
     else if ((column === 'amount' || column === 'distance') && !isNaN(condiition)) {
        arr = array.filter(a => {
          switch (operation) {
            case '===':
              return a[column] == condiition
            case '>':
              return a[column] > condiition
            case '<':
              return a[column] < condiition
          }
        }
        )
      }

    }

  }, [column, operation, condiition])
  return (
    <div className="App">
      <Filter setIf={setIf} />
      <Table array={arr} />
    </div>
  );
}

export default App;
