//single selection
//multiple selection

import { useState } from "react";
import data from "./data";

export default function Accordian (){
    const [selected, setSelected] = useState(null)

    function handleSingleSelection(currentId) {
        setSelected(current => current === currentId ? null : currentId)
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item" key={dataItem.id}>
                        <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            {selected === dataItem.id ? <span></span> : <span>+</span>}
                        </div>
                        {
                            selected === dataItem.id ?
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