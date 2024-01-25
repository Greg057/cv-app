

export default function ResumeSection ({ fullName, email, phoneNumber, address }) {
    

    return (
        <div className="resume-section">
            <div className="top-section">
                <h1>{fullName}</h1>
                <div>
                    <h6>{email}</h6>
                    <h6>{phoneNumber}</h6>
                    <h6>{address}</h6>
                </div>
            </div>
        </div>
    )
}