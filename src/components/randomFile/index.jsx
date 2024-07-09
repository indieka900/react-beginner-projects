/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setcolor] = useState('#000000');

    function RandomColorUtility (len){
        return Math.floor(Math.random()*len)
    }

    function handleCreateRandomColor() {
        if (typeOfColor === 'hex'){
            const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
            let hexColor = "#";

            for(let i=0; i<6; i++) {
                hexColor += hex[RandomColorUtility(hex.length)];
            }
            setcolor(hexColor); 
        } else {
            //rgb(97, 65, 1)
            const r = RandomColorUtility(256);
            const g = RandomColorUtility(256);
            const b = RandomColorUtility(256);

            setcolor(`rgb(${r}, ${g}, ${b})`);
        }
    }

    // useEffect(() => {
    //     typeOfColor === 'rgb' ? ha
    // })

    console.log(typeOfColor, color);

    return(
        <div style={{
            width: '100vw',
            height: "100vh",
            background: color,
            padding: "10px",
        }}>
            <button onClick={() => {
                typeOfColor !== 'hex' && setcolor('#000000AD')
                setTypeOfColor('hex');
            }}>Create HEX Color</button>
            <button onClick={() => {
                typeOfColor !== 'rgb' && setcolor('rgb(0, 0, 0)');
                setTypeOfColor('rgb');
            }}>Create RGB Color</button>
            <button onClick={handleCreateRandomColor}>Generate random color</button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center,',
                fontSize: '40px',
                marginTop: '50px',
                color: 'white',
                flexDirection: 'column',
                gap: '25px',
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color: ' : 'HEX color :'}</h3>
                <h1>{color}</h1>
            </div>
            
        </div>
    )
}

export default RandomColor;