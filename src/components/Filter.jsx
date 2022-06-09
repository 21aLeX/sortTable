import React, { useState,useMemo } from 'react';

const Filter = (props) => {
    const [condition, setCondition] = useState('')
    // console.log(props.setState)
    useMemo(()=>{

    props.setState(condition)
    },[condition]

    )
    return (
        <div>
            <select defaultValue="default">
                <option value="default" disabled hidden>столбец</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <select defaultValue="default">
                <option  value="default"  disabled hidden>операция</option>
                <option value="=">=</option>
                <option value=">">&#62;</option>
                <option value="<">&#60;</option>
                <option value="включает">включает</option>
            </select>
            <input
            value={condition}
            onChange={e=>setCondition(e.target.value)}></input>
        </div>
    );
};

export default Filter;