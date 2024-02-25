import { useState } from "react";

export default function Skills({skillsInfo,onStateChange}){
    const [showForm,setShowForm]=useState(false);


    return (
        <>
        {showForm?(
            <form>
               <lable>
                Company Name:
                <input type="company" value={skillsInfo.company} onChange={(e)=>onStateChange('company',e.target.value)}></input>
                </lable> 
            </form>
        ):(
            <button onClick={() => setShowForm(true)} >Show Skills Info</button>
        )}
        
        
        
        
        
        </>
    )
}