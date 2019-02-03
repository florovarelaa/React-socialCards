import React from 'react'
import CardImage from '../CardImage/CardImage'

const User = (props) => {
    return (
        <div className="bg-white orange flex justify-around w-25 pa1">
            <span className="fw5 serif center">{props.name}</span>
            <CardImage image="https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/36284658_10156334091916768_4793706539158339584_n.jpg?_nc_cat=103&_nc_ht=scontent.faep9-1.fna&oh=0b0ab7fdb766092272b0cf02027e1976&oe=5CE7839B"/>
        </div>
    )
}

export default User;