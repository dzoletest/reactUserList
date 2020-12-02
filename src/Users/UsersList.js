import React from 'react';
import User from './User/User'

const users = props => {
    return props.users.map((users) => {
        return (
                <li  key={users.id}>
                    <User
                        firstname={users.firstname}
                        lastname={users.lastname}
                        age={users.age}
                        img={users.img}
                        city={users.city}
                        key={users.id}
                        clicked = {props.clicked}
                    />
                </li>

        );
    });
};

export default users;