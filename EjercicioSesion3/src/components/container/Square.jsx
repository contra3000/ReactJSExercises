import React, { useEffect, useState } from 'react'

export const Square = ( props ) => {

    let red = 0;
    let green = 200;
    let blue = 150;

    let initialColor = `rgb(${red}, ${green}, ${blue})`

    const [hover, setHover] = useState(false);
    const [changingColor, setChangingColor] = useState(true);
    const [color, setColor] = useState(initialColor);

    const changeColor = () => {
        setColor(`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`);
    }

    useEffect(() => {
        if(changingColor){
            const intervalID = setInterval(() => {
                changeColor();
                console.log('Color actualizado');
                
            }, 1000);
    
            return () => {
                clearInterval(intervalID);
            }
        } else {
            return;
        }
    });


    const mouseOver = () => {
        setHover(true);
    }

    const mouseOut = () => {
        setHover(false);
    }

    const doubleClickAction = () => {
        setChangingColor(!changingColor);
    }

    let squareStyle = {
        backgroundColor: ( hover ? color : 'black'), 
        height: '255px', 
        width: '255px'
    }

    const Cuadrado = () => {
        return (
            <div style={squareStyle} 
            onDoubleClick={doubleClickAction} 
            onMouseEnter={mouseOver}
            onMouseLeave={mouseOut}>
            </div>
        )
    }

    return (
        <Cuadrado></Cuadrado>
    )
}
