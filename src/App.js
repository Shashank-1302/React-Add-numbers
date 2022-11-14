import React, {useState } from "react";
import './App.css';
function AddNumber() {
 
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, setTotal] = useState(); 
  const [t4, sett4] = useState(); 



function onClick()
{
setTotal(Number(num1) + Number(num2)); // set number to the state
}
function setT4(){
  sett4(total)
}

  return (
    <div>
      
      <h1>Add Two Numbers</h1>

      <label>Number 1</label>
      <input type="text" name="num1" onChange={(event) =>
              {
                setNum1(event.target.value);      
              }}>
      </input>
      <label>Number 2</label>
      <input type="text" name="num2"  onChange={(event) =>
              {
                setNum2(event.target.value);      
              }}>
       </input>
       <label>Total</label>
       <button onClick={onClick}> Add</button>
      <input type="text" value={ total }></input>  
      <label>for putting in t4</label>
      <button onClick={setT4}> submit</button>
      <input type="text" value={ t4 }></input>  

       
     
    </div>

          
      
  );
          
}
export default AddNumber;