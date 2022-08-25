import React from 'react'

export default function Landmarks(props) {
    return (
        <div className="destination">
                <img className="photo" src={props.item.imageUrl}/>
            <section className="nav--info">
                <img className="path--photo" src="/nav-image.png" />
                <span className="location" ><small>{props.item.location}</small></span>
                <span><small><a  href={props.item.googleMapsUrl}>View on Google Maps</a></small></span>
                <h2 className="title">{props.item.title}</h2>
                <p className="date" >{props.item.startDate} - {props.item.endDate}</p>
                <p className="paragraph" >{props.item.description}</p>
            </section>
                
        </div>
    )
}