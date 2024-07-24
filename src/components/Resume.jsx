import React from 'react';
import moment from 'moment';
import './Resume.css';

export default function Resume(props) {
    const { firstName = '', lastName = '', email = '', phoneNo = '' } = props.generalInfo || {};
    const { college = '', branch = '', gpa = '', startDate = '', endDate = '' } = props.educationalInfo || {};
    const { workExperienceInfo = [] } = props;

    return (
        <div className="page">
            <div className="header">
                <div className="name">{firstName} {lastName}</div>
                <div className="contact-info">{email} {email?<span>/</span>:<div></div>} {phoneNo}</div>
            </div>
            <div className="section">
                <div className="section-title heading-title">Education</div>
                <div className="list-item"><strong>{college}</strong> {branch ? ', ' + branch : ''}</div>
                <div className="list-item">GPA: {gpa}</div>
                <div className="list-item">Dates: {startDate ? moment(startDate).format('MMMM Do YYYY') : ''}{endDate ? ' - ' + moment(endDate).format('MMMM Do YYYY') : ''}</div>
            </div>
            <div className="section">
                <div className="section-title heading-title">Work Experience</div>
                {workExperienceInfo.map((exp, index) => (
                    <div key={index}>
                        <div className="list-item"><strong>{exp.company}</strong> {exp.position ? ', ' + exp.position : ''}</div>
                        <div className="list-item">Dates: {exp.startDate} - {exp.endDate}</div>
                        <div className="list-item">{exp.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
