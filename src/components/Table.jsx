import React from 'react';
import  './style.css'

const Table = () => {
    const array = [{
        i:'20/05/2022',
        a: 'help',
        b: 4, 
        c:67}]
    return (
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
            {array.map((y, index) => (
        <tr
          align="right"
          key={index + 1}
        >
          
          <td>
            {y.i}
          </td>
          <td>{y.a}</td>
          <td>{y.b}</td>
          <td>{y.c}</td>
        </tr>
      ))}
            </tbody>
        </table>
    );
};

export default Table;