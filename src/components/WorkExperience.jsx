import { useState } from "react";
import "./styles.css"; // Ensure this path matches the location of your styles

export default function WorkExperience({ workExperienceInfo, onStateChange, onAdd, onRemove }) {
    const [showForm, setShowForm] = useState(false);

    // Handler for changing fields within a specific work experience entry
    const handleChange = (index, key, value) => {
        const updatedWorkExperience = [...workExperienceInfo];
        updatedWorkExperience[index][key] = value;
        onStateChange(updatedWorkExperience);
    };

    return (
        <>
                <div>
                    {workExperienceInfo.map((experience, index) => (
                        <form className="form" key={index}>
                            <label className="label">
                                Company
                                <input type="text" className="input" value={experience.company} onChange={(e) => handleChange(index, 'company', e.target.value)} />
                            </label>
                            <label className="label">
                                Position
                                <input type="text" className="input" value={experience.position} onChange={(e) => handleChange(index, 'position', e.target.value)} />
                            </label>
                            <label className="label">
                                Start Date
                                <input type="date" className="input" value={experience.startDate} onChange={(e) => handleChange(index, 'startDate', e.target.value)} />
                            </label>
                            <label className="label">
                                End Date
                                <input type="date" className="input" value={experience.endDate} onChange={(e) => handleChange(index, 'endDate', e.target.value)} />
                            </label>
                            <label className="label">
                                Description
                                <textarea className="input" value={experience.description} onChange={(e) => handleChange(index, 'description', e.target.value)} />
                            </label>
                        </form>
                    ))}
                </div>
        </>
    );
}
