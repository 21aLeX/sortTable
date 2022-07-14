import './App.css';
import React, { useState, useMemo, useEffect } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import { fetchData } from './http/dataAPI';
import { getPagesArray, getPagesCount } from './utils/pages';
// import GetData from './components/bd';

function App() {
  const [column, setColumn] = useState('')
  const [operation, setOperation] = useState('')
  const [condiition, setCondition] = useState('')
  const [array, getArray] = useState([])
  const [count, getCount] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  let limit = 5
  let pagesArray = getPagesArray(totalPages)

  useEffect(() => {
    fetchData(page).then(data => {
      localStorage.setItem('data', JSON.stringify(data.rows))
      localStorage.setItem('count', data.count)
      getCount(localStorage.getItem('count'))
      getArray(JSON.parse(localStorage.getItem('data')))
      setTotalPages(getPagesCount(data.count, limit))
    })
  }, [])
  useMemo(() => {
    fetchData(page).then(data => {
      localStorage.setItem('data', JSON.stringify(data.rows))
      localStorage.setItem('count', data.count)
      getCount(localStorage.getItem('count'))
      getArray(JSON.parse(localStorage.getItem('data')))
      setTotalPages(getPagesCount(data.count, limit))
    })
  }, [page])
  
  const GetPages = (p)=>{
    console.log(p)
    setPage(p)
  }
  // console.log(pagesArray)
  let arr = array

  const setIf = (column, operation, condiition) => {
    setColumn(column)
    setOperation(operation)
    setCondition(condiition)
  }

  useMemo(() => {
    if (column !== '' & operation !== '' & condiition !== '') {
      if (operation == 'включает') {
        arr = array.filter(a =>
          String(a[column]).toLowerCase().includes(condiition)
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
      <Table array={arr} pages={pagesArray} getPages={GetPages}/>
    </div>
  );
}

export default App;
