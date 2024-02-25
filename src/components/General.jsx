// src/General.jsx
import { useState } from "react";
import "./styles.css"; // Adjust the path as necessary

export default function General({generalInfo, onStateChange}) {

    return (
        <>
                <form className="form">
                    <label className="label">
                        First Name
                        <input type="text" value={generalInfo.firstName} onChange={(e) => onStateChange('firstName', e.target.value)} className="input" />
                    </label>
                    <label className="label">
                        Last Name
                        <input type="text" value={generalInfo.lastName} onChange={(e) => onStateChange('lastName', e.target.value)} className="input"/>
                    </label>
                    <label className="label">
                        Email
                        <input type="text" value={generalInfo.email} onChange={(e) => onStateChange('email', e.target.value)} className="input"/>
                    </label>
                    <label className="label">
                        Phone No.
                        <input type="text" value={generalInfo.phoneNo} onChange={(e) => onStateChange('phoneNo', e.target.value)} className="input"/>
                    </label>
                </form>
        
        </>
    );
}
