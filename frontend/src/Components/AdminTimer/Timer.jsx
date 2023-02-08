import React from "react";
import "./Timer.css";

const Timer = () =>{
    const [seconds,setSeconds]=userState(0);
    const [minutes,setMinutes]=userState(0);

    userEffect(()=>{
        Timer= setInterval(()=>{
            setSeconds(seconds+1);
            if (seconds===59){
                setMinutes(minutes+1);
                setSeconds(0);
            }

        },1000
        )
    return ()=>clearInterval(Timer);    

    });

    const restart=()=>{
        setSeconds(0);
        setMinutes(0);

    }
    const stop=()=>{
        clearInterval(Timer);

    }

    return(
        <div className="Timer">
            <div className="container">
                <div className="Timer_container">
                    <h1>Timer</h1>
                    <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>
                    <button className="restart" onClick={restart}>Restart</button>
                    <button className="stop" onClick={stop}>Stop</button>

                </div>
            </div>
        </div>
    )
}