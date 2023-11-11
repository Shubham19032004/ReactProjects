import React from "react";

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div onClick={props.holdDice} className="Die" style={styles}>
        <h2 className="die-num">{props.count}</h2>
        </div>
    )
}