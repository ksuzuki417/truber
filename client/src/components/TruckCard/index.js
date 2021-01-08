import React from "react";
import Container from  "../Container/Container"

// This file exports both the List and ListItem components

export function Card({ children }) {
  return (
    <div className="card" id="selector">{children}</div>
  )}

export function CardItem({
    image,
    make,
    model,
    location,
    rate
}) {
    return (
        <ul>
        <li className="content">
            <Container>
            <img src="..." className="card-img" alt="..."/>
            <strong>Make:</strong> {make}
            <strong>Model:</strong> {model}
            <strong>Location:</strong> {location}
            <strong>Rate:</strong> {rate}
            </Container>
        </li>
        </ul>
    )
}