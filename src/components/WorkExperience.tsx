import React from "react";
import Image from "next/image";
import styles from "./WorkExperience.module.css";

interface Role {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  skills: string[];
}

interface Company {
  name: string;
  logo: string;
  duration: string;
  roles: Role[];
}

interface WorkExperienceProps {
  companies: Company[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ companies }) => {
  return (
    <div className={styles.workExperience}>
      {companies.map((company, index) => (
        <div key={index} className={styles.company}>
          <div className={styles.companyHeader}>
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={48}
              height={48}
              className={styles.companyLogo}
            />
            <div>
              <h3>{company.name}</h3>
              <p>{company.duration}</p>
            </div>
          </div>
          <div className={styles.roles}>
            {company.roles.map((role, roleIndex) => (
              <div key={roleIndex} className={styles.role}>
                <div className={styles.roleBullet}></div>
                <div>
                  <h4>{role.title}</h4>
                  <p>{`${role.startDate} - ${role.endDate}`}</p>
                  <p>{role.location}</p>
                  <p>{role.skills.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
