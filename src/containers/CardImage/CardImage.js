import React from 'react'

const CardImage = (props) => {
    return (
        <div>
            <img alt="Card" src={props.image} style={{height: 50, width: 50 }}/>
        </div>
    )
}

export default CardImage;