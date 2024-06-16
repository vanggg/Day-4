const resume = {
    "name": "xyz",
    "Email_id": "abc@gmail.com",
    "contact_no": "1234567890",
    "Professional_Summary": "5+ years of experience, meticulous and detail-oriented Testing Engineer possessing expertise in Testing (Manual & automation). Adept at Test Planning, Test Design, Test Execution, Defect Reporting & Tracking. Armed with an in-depth knowledge of all phases in SDLC/STLC, good exposure to Agile Methodologies. Test management tools like TestRail, Confluence, Test Tracker, Testhaus, Automation Frameworks: Selenium IDE, API Testing: Postman, Version Control: Git, CI/CD Pipelines: Azure DevOps, GCloud, Defect management tools like JIRA and Buganizer.",
    "Professional_Experience": [
        {
            "role": "Consultant QA",
            "company": "xyz",
            "duration": "July 2023 - Present"
        },
        {
            "role": "Senior Software Engineer",
            "company": "xyz",
            "duration": "November 2021 - June 2023"
        },
        {
            "role": "QA Tester-II and QA Tester-I",
            "company": "xysd",
            "duration": "September 2018 - October 2021"
        }
    ],
    "Current_Project": {
        "job_title": "Senior Software Engineer",
        "company": "xyz",
        "location": "Hyderabad, Telangana",
        "responsibilities": [
            "Worked on Chrome books for compatibility for functional, system testing and User acceptance testing.",
            "Analyzed and reported the bugs using defect tracking tool Buganizer.",
            "Monitoring & reporting bugs on the functional defects of Google internal tools."
        ]
    },
    "education": {
        "degree": "Bachelor of Engineering and Technology",
        "institution": "xyz",
        "location": "Hyderabad",
        "graduation_year": "2018"
    },
    "skills": [
        "Javascript",
        "Manual testing",
        "Automation testing",
        "Sublime text",
        "Postman",
        "JIRA",
        "TestRail",
        "Selenium IDE",
        "ADB",
        "GitBash",
        "Confluence",
        "Testtracker",
        "SQL"
    ],
    "place": "Hyderabad",
    "date": "10-06-2024"
};
// console.log(resume); 
// // For  loop
// for (let i = 0; i < resume.Professional_Experience.length; i++) {
//     console.log(resume.Professional_Experience[i]);
// }
//For in 
// for(let vaa in resume.education){
//     console.log(vaa);
// }

// for(let sk of resume.skills){
//     console.log(sk);
// }

resume.Professional_Experience.forEach(item => {
    console.log(item);
});
