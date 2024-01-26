/* eslint-disable react/no-unescaped-entities */

export default function EducationSection ({ educationInfo }) {
    return (
        <div className="resume-item" key={educationInfo.id}>
            <div className="item-title">
                <div style={{fontWeight: 600}}>{educationInfo.school}<span style={{fontStyle: "italic", fontWeight: 400}}> - {educationInfo.location}</span></div>
                <div style={{fontStyle: "italic"}}>{educationInfo.startDate} - {educationInfo.endDate}</div> 
            </div>
            <div>{educationInfo.degree}</div>
        </div>
    )
}