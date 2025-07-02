import React from 'react'
import './accomplishments.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Accomplishments = () => {
  const experiences = [
    {
      position: "Fullstack Developer (Contract)",
      company: "Paira",
      period: "2020 - 2022",
      achievements: [
        "Engineered a React Native mobile app and Node.js backend, cutting API response times by 60%",
        "Automated budgeting workflows, eliminating 80% of manual data entry tasks",
        "Integrated CI/CD pipelines with Azure DevOps, slashing deployment time by 50%",
        "Collaborated with designers and QA to ensure 95% feature completion per sprint"
      ],
      technologies: ["React Native", "Node.js", "Azure DevOps", "JavaScript", "MongoDB"]
    },
    {
      position: "Data Specialist | Python Automation",
      company: "Holiday Inn & Suites",
      period: "2022 - 2024",
      achievements: [
        "Built Python scripts to automate financial reporting, reducing prep time by 35%",
        "Developed dashboards and Excel macros to support real-time data visibility",
        "Optimized business operations and cut costs by 15% through data-driven improvements",
        "Maintained 99%+ data integrity across high-volume spreadsheets and systems"
      ],
      technologies: ["Python", "Excel VBA", "Pandas", "Google Sheets", "SQL"]
    },
    {
      position: "Desktop Support Technician | Scripting & Infrastructure Support",
      company: "Carvana",
      period: "2024 - Present",
      achievements: [
        "Resolved 200+ support tickets with 98% user satisfaction, improving operational SLAs",
        "Scripted onboarding automations, reducing provisioning time by 25%",
        "Authored and standardized SOPs, cutting repeat ticket volume by 18%",
        "Assisted infrastructure engineers with deployment tasks and network configuration"
      ],
      technologies: ["PowerShell", "Active Directory", "JAMF", "ServiceNow", "Networking"]
    }
  ];

  return (
    <section id='accomplishments'>
      <h5>My Work Experience</h5>
      <h2>Professional Journey</h2>

      <div className='container accomplishments_container'>
        {experiences.map((exp, index) => (
          <article key={index} className='accomplishment_item'>
            <div className='accomplishment_header'>
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <small className='text-light'>{exp.period}</small>
            </div>
            
            <div className='accomplishment_achievements'>
              <h5>Key Achievements:</h5>
              <ul>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    <BsFillPatchCheckFill className="achievement_icon"/>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className='accomplishment_technologies'>
              <h5>Technologies Used:</h5>
              <div className='tech_tags'>
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className='tech_tag'>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Accomplishments;