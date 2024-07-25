
import { useState } from "react";
import './styles.css'
export default function Submit({showResume,handleEdit,handleSubmit}){


    return (
        <>
        <div>
        {!showResume ? (
                    <button className="submit-btn" onClick={handleSubmit}>Reset</button>
                ) : (
                    <button className="submit-btn" onClick={handleEdit}>Reset</button>
                )}
        
        </div> 
        </>
    )
}