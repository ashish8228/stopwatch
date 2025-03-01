import React,{useRef, useState} from "react";
import ReactDOM from "react-dom/client";




function Main(){

    const [time, settime] = useState(0)
    const [cliked , setclicked] = useState(false)
    const storerefer = useRef(null)

      function Start(){
        if(!cliked){
        storerefer.current = setInterval(()=>{
            settime ((latesttime)=>latesttime+1)
        },1000)
        setclicked(true)
    }
    }

    function Stop(){
        if(cliked){
        clearInterval(storerefer.current);
        storerefer.current = null;
        }
    }

    function Reset(){
        
        clearInterval(storerefer.current);
        storerefer.current = null;
        settime(0)
        setclicked(false)
       
    }

    return(
        <div id="main">
            <h1 id="time">{time} <sub>Sec</sub></h1>
            <button onClick={()=>{Start()}} id="start" className="clock">Start</button>
            <button onClick={()=>{Stop()}} id="stop" className="clock">Stop</button>
            <button onClick={()=>{Reset()}} id="reset" className="clock">Reset</button>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>)