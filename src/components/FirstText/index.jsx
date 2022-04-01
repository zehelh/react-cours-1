import React, { useEffect, useState } from 'react';

const FirstText = (props) => {

    const [inputValue, setInputValue] = useState();
    const [inputValue2, setInputValue2] = useState();

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        console.log(inputValue)
    }, [inputValue])

    const handleChange2 = (e) => {
      setInputValue2(e.target.value)
  }
    useEffect(() => {
        console.log(inputValue2)
    }, [inputValue2])

    return (
        <div className="card">
          <div className='col-6'>
            <label htmlFor="" className='form-label'>First input</label>
            <input type='text' onChange={handleChange} className='form-control'/>
          </div>
          <p>First props: {props.osefdunom} </p>
          <p>Sec props: {props.osefdunom2} </p>
          <div className="col-6">
            <input className="form-control" type="text" onChange={handleChange2}/>
            <p>Value: {}</p>
          </div>
        </div>
    );
};

export default FirstText;