

export default function ResumeSection ({ personalInfo }) {
    

    return (
        <div className="resume-section">
            <div className="top-section">
                <h1>{personalInfo.fullName}</h1>
                <div>
                    <h6>{personalInfo.email}</h6>
                    <h6>{personalInfo.phoneNumber}</h6>
                    <h6>{personalInfo.address}</h6>
                </div>
            </div>
        </div>
    )
}