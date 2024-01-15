type SkillItemProps = {
  title: string;
  backgroundColor: string;
};
const SkillItem = ({ title, backgroundColor }: SkillItemProps) => (
  <div
    className='border-2 shadow-lg rounded-full py-1 px-3 m-1 border-transparent dark:text-black'
    style={{ backgroundColor }}
  >
    {title}
  </div>
);

export interface skillsProps {
  className?: string;
}

const COLOR_KEY: { [label: string]: string } = {
  recent: "silver",
  not_recent: "lime",
};
const SKILL_ARRAY: SkillItemProps[] = [
  {
    title: "React / React Native - Typescript",
    backgroundColor: COLOR_KEY.recent,
  },
  {
    title: "NodeJS - Typescript / JavaScript",
    backgroundColor: COLOR_KEY.recent,
  },
  {
    title:
      "Google Firebase - Functions, Firestore (Documents / Rules), Authentication",
    backgroundColor: COLOR_KEY.recent,
  },
  {
    title:
      "AWS - ECS, Lambda, ElasticBeanstalk, EC2, RDS, VPC (inc. Endpoint Services), SNS, CloudWatch Logs, S3, Route53",
    backgroundColor: COLOR_KEY.recent,
  },
  {
    title: "Heroku - Dyno configuration, PostgreSql, Heroku Connect",
    backgroundColor: COLOR_KEY.not_recent,
  },
  {
    title:
      "Salesforce - sObject configuration, APEX Classes, Flows and Process Builder, Lightening Components",
    backgroundColor: COLOR_KEY.not_recent,
  },
  {
    title:
      "Auth0 - Custom Social Authenticator, Custom Login Pages, Rules Configuration",
    backgroundColor: COLOR_KEY.not_recent,
  },
  {
    title: "Oracle ADF Development (Java) - Web UI and Rest Services",
    backgroundColor: COLOR_KEY.not_recent,
  },
  {
    title: "Oracle PL/SQL for Fast Formula function development",
    backgroundColor: COLOR_KEY.not_recent,
  },
  {
    title:
      "Oracle PL/SQL iRepository - Development and Annotation of PL/SQL Packages",
    backgroundColor: COLOR_KEY.not_recent,
  },
  {
    title:
      "Oracle EBS Core Payroll - Elements, Data Structures (Payroll Tables, Global Values), Payroll",
    backgroundColor: COLOR_KEY.not_recent,
  },
];

export function Skills({ className }: skillsProps) {
  return (
    <div className={className}>
      <h1 className='text-xl font-bold leading-tight tracking-tighter'>
        Key Skills
      </h1>

      <div className='flex flex-wrap'>
        {SKILL_ARRAY.map((skill) => (
          <SkillItem key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
}
