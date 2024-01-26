export default function ExperienceSection ({ experienceInfo }) {
    return (
        <div className="resume-item" key={experienceInfo.id}>
            <div className="item-title">
                <div style={{fontWeight: 600}}>{experienceInfo.companyName}<span style={{fontStyle: "italic", fontWeight: 400}}> - {experienceInfo.location}</span></div>
                <div>{experienceInfo.startDate} - {experienceInfo.endDate}</div>
            </div>
            <div style={{marginBottom: "8px"}}>{experienceInfo.positionTitle}</div>
            <div style={{textAlign: "justify"}}>{experienceInfo.description}</div>
        </div>
    )

}