import React from 'react';
import { useState } from 'react';
import  './style.css'

const Table = (props) => {
  const [page, setPage] =useState()

  const changePage = (p)=>{
props.getPages(p)
  }
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <td>Дата</td>
                    <td>Название</td>
                    <td>Кол-во</td>
                    <td>Расстояние</td>
                </tr>
            </thead>
            <tbody>
            {props.array.map((y, index) => (
        <tr
          align="right"
          key={index + 1}
        >
          
          <td>
            {y.date}
          </td>
          <td>{y.title}</td>
          <td>{y.amount}</td>
          <td>{y.distance}</td>
        </tr>
      ))}
            </tbody>
        </table>
{props.pages.map(p=>
  <button
  key={p}
  style={{marginTop:10, cursor:'pointer'}}
  onClick={()=>{changePage(p)}}
  >{p}</button>
  )}
        </div>
    );
};

export default Table;