/* eslint-disable react/no-unescaped-entities */

export default function EducationSection ({ educationInfo }) {
    return (
        <div className="education-item" key={educationInfo.id}>
            <div>
                <div>{educationInfo.school}</div>
                <div>{educationInfo.degree}</div>
            </div>
            <div>
                <div>{educationInfo.startDate} - {educationInfo.endDate}</div>
                <div>{educationInfo.location}</div>
            </div>
        </div>
    )
}