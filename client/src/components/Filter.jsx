import React, { useState, useEffect } from 'react';

const Filter = (props) => {
    const [condition, setCondition] = useState('')
    const [column, setColumn] = useState('')
    const [operation, setOperation] = useState('')
    const setState = (e) => {
        setCondition(e.target.value)
    }
    useEffect(() => {
        props.setIf(column, operation, condition)
    }, [condition, column, operation])

    return (
        <div>
            <select defaultValue="default"
                onChange={e => setColumn(e.target.value)}
            >
                <option value="default" disabled hidden>столбец</option>
                <option value="title">Название</option>
                <option value="amount">Кол-во</option>
                <option value="distance">Расстояние</option>
            </select>
            <select defaultValue="default"
                onChange={e => setOperation(e.target.value)}
            >
                <option value="default" disabled hidden>операция</option>
                <option value="===">=</option>
                <option value=">">&#62;</option>
                <option value="<">&#60;</option>
                <option value="включает">включает</option>
            </select>
            <input
                value={condition}
                onChange={setState}></input>
        </div>
    );
};

export default Filter;