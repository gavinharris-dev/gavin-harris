type SkillItemProps = {
  title: string;
  lastUsed: string;
};
const SkillItem = ({ title }: SkillItemProps) => (
  <li className='list-item'>{title}</li>
);

const SKILL_ARRAY: SkillItemProps[] = [
  {
    title: "React / React Native - Typescript",
    lastUsed: "Current",
  },
  {
    title: "SQL - Oracle DB and PostgreSql",
    lastUsed: "Current",
  },
  {
    title: "NodeJS - Typescript / JavaScript",
    lastUsed: "Current",
  },
  {
    title:
      "Google Firebase - Functions, Firestore (Documents / Rules), Authentication",
    lastUsed: "Current",
  },
  {
    title:
      "AWS - ECS, Lambda, ElasticBeanstalk, EC2, RDS, VPC (inc. Endpoint Services), SNS, CloudWatch Logs, S3, Route53",
    lastUsed: "Current",
  },
  {
    title: "Heroku - Dyno configuration, PostgreSql, Heroku Connect",
    lastUsed: "> 2 years ago",
  },
  {
    title:
      "Salesforce - sObject configuration, APEX Classes, Flows and Process Builder, Lightening Components",
    lastUsed: "> 2 years ago",
  },
  {
    title:
      "Auth0 - Custom Social Authenticator, Custom Login Pages, Rules Configuration",
    lastUsed: "> 2 years ago",
  },
  {
    title: "Oracle ADF Development (Java) - Web UI and Rest Services",
    lastUsed: "> 5 years ago",
  },
  {
    title: "Oracle PL/SQL for Fast Formula function development",
    lastUsed: "> 5 years ago",
  },
  {
    title:
      "Oracle PL/SQL iRepository - Development and Annotation of PL/SQL Packages",
    lastUsed: "Current",
  },
  {
    title:
      "Oracle EBS Core Payroll - Elements, Data Structures (Payroll Tables, Global Values), Payroll",
    lastUsed: "> 5 years ago",
  },
];

export function Skills() {
  return (
    <div className='prose mx-4'>
      <h1>Skills</h1>

      <ul className='list-outside'>
        {SKILL_ARRAY.filter((s) => s.lastUsed === "Current").map((skill) => (
          <SkillItem key={skill.title} {...skill} />
        ))}
      </ul>
      <div className='collapse bg-base-200'>
        <input type='checkbox' />
        <div className='collapse-title text-lg font-light'>
          Show skills used in prior years
        </div>
        <div className='collapse-content'>
          <ul className='list-outside'>
            {SKILL_ARRAY.filter((s) => s.lastUsed !== "Current").map(
              (skill) => (
                <SkillItem key={skill.title} {...skill} />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
