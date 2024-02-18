import React, { useState, useEffect, useRef } from 'react'
import '../styles/Loader.css'


export function Loader() {
    return (
        <div className="loader-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
}

