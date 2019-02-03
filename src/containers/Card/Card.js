import React from 'react';
import CardImage from '../CardImage/CardImage'
import User from '../User/User'
import './Card.css'

const Card = () => {
        return (
            <div>
                <div className="a-l left pa1">
                    <CardImage image="https://media.wired.com/photos/5b6902bff6d47809bff3a57c/master/pass/sand-78417588.jpg"/>
                </div>
                <h1 className="white sans-serif">Learning React? Start small.</h1>
                <User name="Florencio Varela"/>
            </div>
        );
}

export default Card;