import React from "react";
import {useEffect,useState} from "react";

const Counter =()=>{
  const [minutos,setMinutos]=useState(0);
  const [count,setCount]=useState(0);
  const increment = () =>{ setCount(count + 1)}
  const decrement = () =>{ setCount(count - 1)}
  var tiempo;
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "30px",
    fontFamily: "Arial",
  };
  useEffect(()=>{
    tiempo=setInterval(()=>{
      setCount((count)=>count+1);
      if(count === 59){ 
        setMinutos(minutos+1);
        setCount(0);
      }
    },1000);
    return ()=>clearInterval(tiempo);
  });
  return <div>
    <h1 style={mystyle}>{minutos}:{count}</h1>
    <button  onClick={increment}>incremento</button>
    <button onClick={decrement}>decremento</button>
  </div>
}
export default Counter;
