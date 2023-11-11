import React from "react";
export default function Card(props) {
  let badgeText
  if(props.openSpots===0){
    badgeText='SOLD OUT'
  }else if(props.location==='Online'){
    badgeText='Onile'
  }
  return (
    <div className="card">
      {badgeText &&
        <div className="card-bdge">{badgeText}</div>}
        <img src={props.image} className="card-img" />
        <div>
        <img src="../images/star.png"/>
        {props.star} ({props.reviewcount})-{props.location}
      </div>
        <p>{props.title}</p>
        <strong>For ${props.price}</strong>/person
    </div>
  );
}
