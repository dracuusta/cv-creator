import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
// Styled components
const Page = styled.div`
  font-family: 'Times New Roman', Times, serif;
  font-size: 12pt;
  line-height: 1.6;
  color: #000;
  padding: 24mm;
  width: 210mm;
  min-height: 297mm;
  box-sizing: border-box;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Name = styled.div`
  font-size: 24pt;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  font-size: 10pt;
  font-style: italic;
`;

const Section = styled.div`
  margin: 10px 0;
`;

const SectionTitle = styled.div`
  font-size: 14pt;
  text-decoration: underline;
  margin-bottom: 5px;
`;

const ListItem = styled.div`
  margin-bottom: 5px;
`;

export default function Resume(props) {
    const { firstName = '', lastName = '', email = '', phoneNo = '' } = props.generalInfo || {};
    const { college = '', branch = '', gpa = '', startDate = '', endDate = '' } = props.educationalInfo || {};
    const {workExperienceInfo=[]}=props;
    return (
        <Page>
            <Header>
                <Name>{firstName} {lastName}</Name>
                <ContactInfo>{email} | {phoneNo}</ContactInfo>
            </Header>
            <Section>
              
                <SectionTitle>Education</SectionTitle>
                <ListItem><strong>{college}</strong> {branch?', '+branch:<div></div>}</ListItem>
                <ListItem>GPA: {gpa}</ListItem>
                <ListItem>Dates: {startDate?moment(startDate).format('MMMM Do YYYY'):''}{endDate?moment('- '+endDate).format('MMMM Do YYYY'):''}</ListItem>
       </Section>
       <Section>
                <SectionTitle>Work Experience</SectionTitle>
                {workExperienceInfo.map((exp, index) => (
                    <div key={index}>
                        <ListItem><strong>{exp.company}</strong> {exp.position?', '+exp.position:<></>}</ListItem>
                        <ListItem>Dates: {exp.startDate} - {exp.endDate}</ListItem>
                        <ListItem>{exp.description}</ListItem>
                    </div>
                ))}
            </Section>
        </Page>
    );
}
