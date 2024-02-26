import { useState } from "react";
import "./styles.css";
export default function Educational({educationalInfo, onStateChange, isActive, onShow}) {

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };

    return (
        <>
                <form>
                    <label className="label">
                        College
                        <input className="input" type="text" value={educationalInfo.college} onChange={(e) => onStateChange('college', e.target.value)} />
                    </label>
                    <label className="label">
                        Branch
                        <input className="input" type="text" value={educationalInfo.branch} onChange={(e) => onStateChange('branch', e.target.value)}/>
                    </label>
                    <label className="label">
                        GPA
                        <input className="input" type="text" value={educationalInfo.gpa} onChange={(e) => onStateChange('gpa', e.target.value)}/>
                    </label>
                    <label className="label">
                        Start-Date
                        <input className="input" type="date" value={educationalInfo.startDate} onChange={(e) => onStateChange('startDate', e.target.value)}/>
                    </label>
                    <label className="label">
                        End-Date
                        <input type="date" className="input" value={educationalInfo.endDate} onChange={(e) => onStateChange('endDate', e.target.value)}/>f8531583b70fbfd83c0d
</label>
                </form>
            
        </>
    );
}
