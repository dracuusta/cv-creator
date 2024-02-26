import { useState } from "react";
import "./styles.css"; // Ensure this path matches the location of your styles

export default function WorkExperience({ workExperienceInfo, addWorkExperience,
     handleCompanyChange, handlePositionChange, handleStartDateChange,handleEndDateChange,handleDescriptionChange
}) {

    const updateCompany=(id,event)=>{
        handleCompanyChange(id,event.target.value);
    }
    const updatePosition=(id,event)=>{
        handlePositionChange(id,event.target.value);
    }

    const updateStartDate=(id,event)=>{
        handleStartDateChange(id,event.target.value);
    }

    const updateEndDate=(id,event)=>{
        handleEndDateChange(id,event.target.value);
    }

    const updateDescription=(id,event)=>{
        handleDescriptionChange(id,event.target.value);
    }

    return (
        <>
                <div>
                    {workExperienceInfo.map((experience, index) => (
                        <form className="form" key={index}>
                            <label className="label">
                                Company
                                <input type="text" className="input" value={experience.company} onChange={(event)=>updateCompany(experience.id,event)} />
                            </label>
                            <label className="label">
                                Position
                                <input type="text" className="input" value={experience.position} onChange={(event)=>updatePosition(experience.id,event)}/>
                            </label>
                            <label className="label">
                                Start Date
                                <input type="date" className="input" value={experience.startDate} onChange={(event)=>updateStartDate(experience.id,event)}/>
                            </label>
                            <label className="label">
                                End Date
                                <input type="date" className="input" value={experience.endDate} onChange={(event)=>updateEndDate(experience.id,event)}/>
                            </label>
                            <label className="label">
                                Description
                                <textarea className="input" value={experience.description} onChange={(event)=>updateDescription(experience.id,event)}/>
                            </label>
                        </form>
                    ))}
                <button className="button" onClick={addWorkExperience}>Add WorkExperience</button>
                </div>
        </>
    );
}
