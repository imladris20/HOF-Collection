/* Always initialize with syntax below

import React from "react";

const Card = () => {
    return (

    )
}

export default Card;

*/

import React from "react";
import './Card.css';

const Card = (props) => {
    const {name,  id, companyName, position} = props;
    return (
        <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt={`${name}`} src={`https://robohash.org/set_set4/${name}${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <h3>{`${companyName}`}</h3>
                <h4>{position}</h4>
                <h4>#{id}</h4>
            </div>
        </div>
    )
}

export default Card;

