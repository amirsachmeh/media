import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";

function ExpendablePanel ({header , children}){
    const [expended,setExpended] = useState(false);

    const handleClick = () =>{
        setExpended(!expended);
    }

    return (
    <div  className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center">
            <div className="flex flex-row items-center justify-between">
                {header}
            </div>
            <div onClick={handleClick}className="cursor-pointer">
            {expended ? <GoChevronDown/> : <GoChevronLeft/>}
            </div>
        </div>
        { expended && <div className="p-2 border-t">{children}</div>}
    </div>
    );

}


export default ExpendablePanel;