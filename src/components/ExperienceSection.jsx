export default function ExperienceSection ({ experienceInfo }) {
    return (
        <div className="experience-item" key={experienceInfo.id}>
            <div>
                <div>{experienceInfo.companyName}</div>
                <div>{experienceInfo.positionTitle}</div>
                <div>{experienceInfo.description}</div>
            </div>
            <div>
                <div>{experienceInfo.startDate} - {experienceInfo.endDate}</div>
                <div>{experienceInfo.location}</div>
            </div>
        </div>
    )

}