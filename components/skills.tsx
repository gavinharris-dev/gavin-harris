export interface skillsProps {
  className?: string;
}

export function Skills({ className }: skillsProps) {
  return (
    <div className={className}>
      <h1 className='text-xl font-bold leading-tight tracking-tighter'>
        Key Skills
      </h1>
      <ul className='mt-2 mx-8 text-sm'>
        <li className='list-disc'>React / React Native - Typescript</li>
        <li className='list-disc'>NodeJS - Typescript / JavaScript</li>
        <li className='list-disc'>
          Google Firebase - Functions, Firestore (Documents / Rules),
          Authentication
        </li>
        <li className='list-disc'>
          AWS - Lambda, ElasticBeanstalk, EC2, RDS, VPC (inc. Endpoint
          Services), SNS, CloudWatch Logs, S3, Route53
        </li>
        <li className='list-disc'>
          Heroku - Dyno configuration, PostgreSql, Heroku Connect
        </li>
        <li className='list-disc'>
          Salesforce - sObject configuration, APEX Classes, Flows and Process
          Builder, Lightening Components
        </li>
        <li className='list-disc'>
          Auth0 - Custom Social Authenticator, Custom Login Pages, Rules
          Configuration
        </li>
        <li className='list-disc'>
          Oracle ADF Development (Java) - Web UI and Rest Services
        </li>
        <li className='list-disc'>
          Oracle PL/SQL for Fast Formula function development
        </li>
        <li className='list-disc'>
          Oracle PL/SQL iRepository - Development and Annotation of PL/SQL
          Packages
        </li>
        <li className='list-disc'>
          Oracle EBS Core Payroll - Elements, Data Structures (Payroll Tables,
          Global Values), Payroll
        </li>
      </ul>
    </div>
  );
}
