const sampleData = {
    personalInfo:
    {fullName: "John Doe", email: "john.doe@gmail.com", phoneNumber: "123-456 789", address: "Mountain View, US"},

    educationInfo:
    [
        {id: 0, school: "MIT University", degree: "Master's Degree in Computer Science", startDate: "09/2022", endDate: "07/2023", location: "New York City, US"}, 
        {id: 1, school: "Harvard University", degree: "Bachelor's Degree in Computer Science", startDate: "09/2018", endDate: "06/2022", location: "Cambridge, Massachusetts, US"}
    ],

    experienceInfo:
    [
        {id: 0, companyName: "Google", positionTitle: "Software Engineer", startDate: "08/2023", endDate: "present", location: "Bay Area, US", description: "Led the development of a cutting-edge customer relationship management (CRM) platform, resulting in a 30% improvement in user engagement and a 20% increase in system efficiency. Collaborated closely with product managers and UX designers to define project requirements, ensuring alignment with business objectives and end-user needs. Developed and maintained robust backend services using Python and Django, implementing RESTful APIs for seamless communication between the server and the front end."}, 
        {id: 1, companyName: "Amazon", positionTitle: "Software Developer Engineer (SDE) Intern", startDate: "06/2022", endDate: "09/2022", location: "San Francisco, US", description: "Contributed to the development of a real-time chat application, implementing WebSocket technology for instant message delivery. Collaborated with senior developers to design and implement scalable and maintainable code structures using Node.js and Express. Assisted in debugging and troubleshooting, resolving issues promptly to ensure smooth application functionality."}
    ]
}

export default sampleData