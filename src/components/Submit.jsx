
import { useState } from "react";

export default function Submit({showResume,handleEdit,handleSubmit}){


    return (
        <>
        
        {!showResume ? (
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                ) : (
                    <button className="btn" onClick={handleEdit}>Edit Resume</button>
                )}
        
        
        
        </>
    )
}