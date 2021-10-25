import React from 'react'
import { useState } from 'react'
import '../style/test.sass'


export const Message = ({message, onMassageClick}) => {
    let [counter, setCount] = useState(0)
    const upCounter = () => {
        console.log('1');
        setCount(counter + 1)
    }

    return <div className="test">
            <h1 className="test__text" onClick={onMassageClick}>
            I am react Component {message}
            </h1>

            <h3 className="test__countnum">{counter}</h3>
            <button className="test__countbtn" onClick={upCounter}>Count + </button>
        </div>

}