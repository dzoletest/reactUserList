import React from 'react';
import './User.css'; 

const user = props => {
    return (
        <article className="user">
            <button className="user__trigger" onClick={props.clicked}>
                <div className="user__image">
                <img src={props.img} alt="" />
                </div>
                <div className="user__info">
                    <h2>{props.firstname} {props.lastname}</h2>
                    <p className="user__age">
                    {props.age}
                    </p>
                </div>
            </button>
            <div className="user__extra-info" >
           <p>City : {props.city}</p> 
            </div>
        </article>
    );
};

export default user;