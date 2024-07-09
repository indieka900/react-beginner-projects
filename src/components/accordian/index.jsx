//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import './style.css'

export default function Accordian (){
    const [selected, setSelected] = useState(null);

    const [enableMultiselec, setEnableMultiselec] = useState(false);
    const [selectedMulti, setSelectedMulti] = useState([]);

    function handleSingleSelection(currentId) {
        setSelected(current => current === currentId ? null : currentId);
    }

    function handleMultiSelection(id) {
        let cpyMulti = [...selectedMulti];
        const  findIndexOfCurrentId = cpyMulti.indexOf(id);

        console.log(findIndexOfCurrentId);

        findIndexOfCurrentId === -1 ? cpyMulti.push(id) : cpyMulti.splice(findIndexOfCurrentId, 1)

        setSelectedMulti(cpyMulti);
        
    }

    
    console.log(selectedMulti);

    const str = enableMultiselec ? "Disable" : "Enable";

    return (
        <div className="wrapper">
            <button onClick={
                () => {
                    enableMultiselec ? setSelectedMulti([]) : setSelected(null);
                    setEnableMultiselec((current) => !current);
                    
                }
            }>{str} Multiple Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item" key={dataItem.id}>
                        <div onClick={
                            enableMultiselec
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                        } className="title">
                            <h3>{dataItem.question}</h3>
                            {selected === dataItem.id ? <span></span> : <span>+</span>}
                        </div>
                        {
                            selected === dataItem.id || selectedMulti.indexOf(dataItem.id) !== -1 ?
                            <div className="content">{dataItem.answer}</div>
                            : null
                        }

                    </div>)
                    : <div>No data Found</div>
                }
            </div>
        </div>
    );
}