import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function Card({ children }) {
  return (
    <div className="card" id="selector">
        <div className="img-container">
            <img alt={ children } src={ children } />
        </div>
            <div className="content">
                <ul>
                    <li>
                        ({ children })
                    </li>
                </ul>
            </div>

    </div>
  )}