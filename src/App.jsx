import React, { useState } from "react";
import './App.css';
import General from './components/General';
import Educational from "./components/Educational";
import Resume from "./components/Resume";
import WorkExperience from "./components/WorkExperience";

export default function App() {
    const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNo: ''});
    const [educationalInfo, setEducationalInfo] = useState({college: '', branch: '', gpa: '', startDate: '', endDate: ''});
    const [workExperienceInfo, setWorkExperienceInfo] = useState([{id: 1, company: '', position: '', startDate: '', endDate: '', description: ''}]);
    const [toggleForm, setToggleForm] = useState(1);
    const [showResume, setShowResume] = useState(true);

    const handleAddWorkExperience = () => {
        const updateWorkExperience = [
            ...workExperienceInfo,
            {
                id: workExperienceInfo.length + 1,
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                description: ''
            }
        ];

        setWorkExperienceInfo(updateWorkExperience);
    };

    const handleGeneralInfoChange = (key, value) => setGeneralInfo(prev => ({...prev, [key]: value}));
    const handleEducationalInfoChange = (key, value) => setEducationalInfo(prev => ({...prev, [key]: value}));
    
    const handleToggleForm = (toggleValue) => setToggleForm(toggleValue);

    const handleCompanyChange = (id, companyName) => {
        setWorkExperienceInfo(workExperienceInfo.map(workExperience => {
            if (workExperience.id === id) {
                return {...workExperience, company: companyName};
            }
            return workExperience;
        }));
    };

    const handlePositionChange = (id, positionName) => {
        setWorkExperienceInfo(workExperienceInfo.map(workExperience => {
            if (workExperience.id === id) {
                return {...workExperience, position: positionName};
            }
            return workExperience;
        }));
    };

    const handleStartDateChange = (id, startDateValue) => {
        setWorkExperienceInfo(workExperienceInfo.map(workExperience => {
            if (workExperience.id === id) {
                return {...workExperience, startDate: startDateValue};
            }
            return workExperience;
        }));
    };

    const handleEndDateChange = (id, endDateValue) => {
        setWorkExperienceInfo(workExperienceInfo.map(workExperience => {
            if (workExperience.id === id) {
                return {...workExperience, endDate: endDateValue};
            }
            return workExperience;
        }));
    };

    const handleDescriptionChange = (id, descriptionValue) => {
        setWorkExperienceInfo(workExperienceInfo.map(workExperience => {
            if (workExperience.id === id) {
                return {...workExperience, description: descriptionValue};
            }
            return workExperience;
        }));
    };

    const handleSubmit = () => {
        setShowResume(true);
    };

    const handleEdit = () => {
        setShowResume(false);
    };

    return (
        <div className="app-container">
            <div className='left-body'>
                <div className='sub-container'>
                <div className="btns">
                    <button className="btn" onClick={() => handleToggleForm(1)}>General</button> 
                    <button className="btn" onClick={() => handleToggleForm(2)}>Education</button>
                    <button className="btn" onClick={() => handleToggleForm(3)}>Work Experience</button>
                </div>
                {toggleForm === 1 && <General generalInfo={generalInfo} onStateChange={handleGeneralInfoChange} showResume={showResume} handleSubmit={handleSubmit} handleEdit={handleEdit} />}
                {toggleForm === 2 && <Educational educationalInfo={educationalInfo} onStateChange={handleEducationalInfoChange} showResume={showResume} handleSubmit={handleSubmit} handleEdit={handleEdit} />}
                {toggleForm === 3 && (
                    <WorkExperience 
                        workExperienceInfo={workExperienceInfo}
                        addWorkExperience={handleAddWorkExperience}
                        handleCompanyChange={handleCompanyChange}
                        handlePositionChange={handlePositionChange}
                        handleStartDateChange={handleStartDateChange}
                        handleEndDateChange={handleEndDateChange}
                        handleDescriptionChange={handleDescriptionChange}
                        showResume={showResume}
                        handleSubmit={handleSubmit}
                         handleEdit={handleEdit}
                    />
                )}
                </div>
             
            </div>
            <div className="resume-container">
                {showResume && <Resume generalInfo={generalInfo} educationalInfo={educationalInfo} workExperienceInfo={workExperienceInfo} />}
            </div>
        </div>
    );
}
