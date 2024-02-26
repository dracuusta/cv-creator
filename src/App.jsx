import React, { useState } from "react";
import General from './components/General'
import Educational from "./components/Educational";
import Resume from "./components/Resume";
import WorkExperience from "./components/WorkExperience";






export default function App() {
    const [generalInfo, setGeneralInfo] = useState({firstName: '', lastName: '', email: '', phoneNo: ''});
    const [educationalInfo, setEducationalInfo] = useState({college: '', branch: '', gpa: '', startDate: '', endDate: ''});
    const [workExperienceInfo, setWorkExperienceInfo]=useState([{id: 1,company: '', position:'',startDate:'',endDate:'',description:''}])
    const [toggleForm, setToggleForm]=useState(1);
    const [showResume, setShowResume]=useState(false);

    function handleAddWorkExperience(){
        const updateWorkExperience=[
            ...workExperienceInfo,
            {
                id: workExperienceInfo.length+1,
                company: '',
                position:'',
                startDate:'',
                endDate:'',
                description:'' 
            }
        ];

        setWorkExperienceInfo(updateWorkExperience);
    }

    const handleGeneralInfoChange = (key, value) => setGeneralInfo(prev => ({...prev, [key]: value}));
    const handleEducationalInfoChange = (key, value) => setEducationalInfo(prev => ({...prev, [key]: value}));
    
    const handleToggleForm=(toggleValue)=>{
        setToggleForm(toggleValue);
    }

  const  handleCompanyChange =(id,companyName)=>{
    setWorkExperienceInfo(workExperienceInfo.map(WorkExperience=>{
        if(WorkExperience.id===id){
            return {...WorkExperience,company:companyName};
        }
        else{
            return WorkExperience;
        }
    }))
  }


   const handlePositionChange=(id,positionName)=>{
    setWorkExperienceInfo(workExperienceInfo.map(WorkExperience=>{
        if(WorkExperience.id===id){
            return {...WorkExperience,position:positionName};
        }
        else{
            return WorkExperience;
        }
    })) 
   }

   const handleStartDateChange=(id,startDateValue)=>{
    setWorkExperienceInfo(workExperienceInfo.map(WorkExperience=>{
        if(WorkExperience.id===id){
            return {...WorkExperience,startDate:startDateValue};
        }
        else{
            return WorkExperience;
        }
    })) 
   }

  const handleEndDateChange=(id,endDateValue)=>{
    setWorkExperienceInfo(workExperienceInfo.map(WorkExperience=>{
        if(WorkExperience.id===id){
            return {...WorkExperience,endDate:endDateValue}; 
        }
        else{
            return WorkExperience;
        }
    })) 
  }

   const handeDescriptionChange=(id,descriptionValue)=>{
    setWorkExperienceInfo(workExperienceInfo.map(WorkExperience=>{
        if(WorkExperience.id===id){
            return {...WorkExperience,description:descriptionValue}; 
        }
        else{
            return WorkExperience;
        }
    }))  
   }
   const handleSubmit=()=>{
    setShowResume(true);
   }

   const handleEdit=()=>{
    setShowResume(false);
   }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
            <div className='left-body' style={{flex: 1, marginRight: '20px'}}>
                {console.log(toggleForm)}
                <div className="btns">
                <button className="btn" onClick={()=>handleToggleForm(1)}>General</button> 
                <button  className="btn" onClick={()=>handleToggleForm(2)}>Educational</button>
                <button className="btn" onClick={()=>handleToggleForm(3)}>Work Experience</button>
                </div>
                {toggleForm===1?(<General generalInfo={generalInfo} onStateChange={handleGeneralInfoChange} />):<div></div>}
               {toggleForm===2? <Educational educationalInfo={educationalInfo} onStateChange={handleEducationalInfoChange}  />:<div></div>}
               {toggleForm===3? 
               <WorkExperience 
                workExperienceInfo={workExperienceInfo}
                addWorkExperience={handleAddWorkExperience}
                handleCompanyChange={handleCompanyChange}
                handlePositionChange={handlePositionChange}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
                handleDescriptionChange={handeDescriptionChange}
               />:<div></div>}
                {!showResume?(<button className="button" onClick={handleSubmit}>Submit</button>):(<button onClick={handleEdit} className="button">Edit Resume</button>)}
            </div>
            <div style={{flex: 1}}>
                {/* Resume Preview */}
                {showResume&&(<Resume generalInfo={generalInfo} educationalInfo={educationalInfo} workExperienceInfo={workExperienceInfo}/>)}
            </div>
        </div>
    );
}
