import React from 'react';
import  './style.css'

const Table = (props) => {
    
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
    );
};

export default Table;