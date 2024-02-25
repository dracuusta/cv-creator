import React, { useState } from "react";
import General from "./General";
import Educational from "./Educational";
import Resume from "./Resume";
import WorkExperience from "./WorkExperience";

export default function Parent() {
    const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNo: ''});
    const [educationalInfo, setEducationalInfo] = useState({college: '', branch: '', gpa: '', startDate: '', endDate: ''});
    const [workExperienceInfo, setWorkExperienceInfo]=useState([{company: '', position:'',startDate:'',endDate:'',description:''}])
    const [toggleForm, setToggleForm]=useState(1);



    const handleGeneralInfoChange = (key, value) => setGeneralInfo(prev => ({...prev, [key]: value}));
    const handleEducationalInfoChange = (key, value) => setEducationalInfo(prev => ({...prev, [key]: value}));
    const handleWorkExperienceInfoChange=(index, key, value)=>{
        setWorkExperienceInfo(prev=>prev.map((item,i)=>i===index?{...item,[key]:value}:item));
    }
    const handleToggleForm=(toggleValue)=>{
        setToggleForm(toggleValue);
    }


    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
            <div style={{flex: 1, marginRight: '20px'}}>
                {console.log(toggleForm)}
                <div className="btns">
                <button className="btn" onClick={()=>handleToggleForm(1)}>General</button> 
                <button  className="btn" onClick={()=>handleToggleForm(2)}>Educational</button>
                <button className="btn" onClick={()=>handleToggleForm(3)}>Work Experience</button>
                </div>
                {toggleForm===1?(<General generalInfo={generalInfo} onStateChange={handleGeneralInfoChange} />):<div></div>}
               {toggleForm===2? <Educational educationalInfo={educationalInfo} onStateChange={handleEducationalInfoChange} />:<div></div>}
               {toggleForm===3? <WorkExperience workExperienceInfo={workExperienceInfo} onStateChange={handleWorkExperienceInfoChange}/>:<div></div>}
            </div>
            <div style={{flex: 1}}>
                {/* Resume Preview */}
                <Resume generalInfo={generalInfo} educationalInfo={educationalInfo} workExperienceInfo={workExperienceInfo}/>
            </div>
        </div>
    );
}
