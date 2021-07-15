---
{
  "title": "Colab Consulting - Technical Consultant, Technical Team Lead and Solutions Architect",
  "excerpt": "Lead Developer, technical trailblazer, Oracle HT/Payroll Technical Consultant",
  "coverImage": "/assets/blog/colab/logo.png",
  "startDate": "2011-01-01T00:00:00.000Z",
  "endDate": "2021-01-01T00:00:00.000Z",
  "author":
    {
      "name": "Gavin Harris",
      "picture": "https://www.gravatar.com/avatar/db0da3096de4012a8482db72d561a279"
    },
  "ogImage": { "url": "/assets/blog/colab/logo.png" }
}
---

# Loop Law

* Solution Design - work with Salesforce and Heroku pre-sales teams to produce, analyze and determine the feasibility of solutions
* Initial Development - Create the initial environment (Salesforce to Heroku PostgreSQL to Secured API output)
* Technical Team Lead - Upskill colleagues on the solution design and technical implementation

# CEL Mobile

* Solution Architecture - Work with client's Architecture Teams to produce a technical solution to allow client's to link their Oracle EBS Suite to CEL Mobile
* Technical Development - Develop NodeJS Middleware solution that will allow CEL Mobile Device application to securely authenticate to client's Active Directory, and then pull data from the Oracle EBS Suite (appropriately striped to the Authenticated user)
* Android Developer - Develop the CEL Mobile Android device application
* Android Lead - Skill up colleagues to speed up development

# Oracle Payroll Technical Support

* On-site Client Support for Oracle EBS Suite
* Develop Oracle BI Publisher reports according to prescribed requirements

# Loop.Law

Gavin drove the architectural design of the Loop Law application; he worked very closely with Loop Law client to ensure that the resulting application was not only fit for purpose but was able to scale to fit the clients aspirations. Gavin worked with PEXA to ensure that Loop Law would become the very first law firm to directly integrate with PEXA.
When it came time to build; Gavin stepped into the Technical Team Lead position, upskilling and managing his technical team to ensure that delivery was always on time and to required quality.

## Technology

The Loop Law tech stack consisted of:

* Salesforce - used internally as the data store and for the business users to manage and progress property transactions,
* Heroku Cloud - used to host all Loop Law Middleware components
  * Heroku Postgres - data store for Device / Web Application read and writes,
  * Heroku Connect - used to keep Salesforce and Heroku Postgres in sync
  * Papertrail - log storage
  * ...
* Auth0 - Used for user authentication and as our user store,
* Angular web application
* iOS Device Application

## Salesforce

* Custom Object design - creating Custom SObjects which were fit for purpose. Linking SObjects to create required relationships.
* APEX Class Development - Creating APEX Classes (Queueable and Future classes for executing Web API's, APEX Triggers to react to changes in SObject Properties ...) ensuring that the classes had appropriate test classes.
* Development of Flows to handle Business logic events, triggering APEX Classes when needed.
* Development of Screen Flows to aid in the seamless capture of core data.
* Configuration and Code Migrations utilizing GearSet.

## Heroku – Cloud

* Development of Node Express JS API layer
  * Implemented Auth0 JWT API Security for b2c access. Each request requires to authenticate with a verifiable Auth0 JWT (Json Web Token) Bearer Token.
  * Implemented Auth0 API Security for internal API usage (Salesforce Web Callouts to Heroku API layer).
  * Integrating the Loop Law system with PEXA, Domain, SAI Global and CoreLogic. This required consumption of their public secured API's.
* Provisioning of Heroku Postgres Database
* Integration of Salesforce and Heroku Postgres utilizing Heroku Connect.
* Development of SQL functions required to safely handle (appropriate Data validation, ensuring that all related SQL Table rows are created) data create from the Node JS API Layer.

## Web Application – Angular

* Assist in the development of the Angular Web Application creating new functionality.
* Identification of Bugs and Implementing Fixes.

## Auth0

* Configuration of Auth0:
  * Multi Tenant - Production and Pre-production
  * Custom Domain.
  * Custom Login Page (which is used on both the Web and Device application).
  * Set-up of Social Authentication - Facebook, Apple and Domain (discontinued).
  * Development of Auth0 Rules to append additional assertions to the Auth0 generated JWT token.

# CEL Mobile

CEL Mobile is a mobile application (and associated Architecture) to render HR, Payroll, Worklist information onto employees iOS and Android devices. This application is being used by large organizations the world over.

Gavin was the early pioneer in getting the very successful SaaS model built for Colab. He worked with sales and pre-implementation teams to guide clients Architecture Team on how CEL Mobile integration could occur.

## Technology

The CEL Mobile platform is a hybrid SaaS and on system application. The SaaS (managed by Colab) part of the application is hosted on Colab's AWS Cloud.

### NodeJS Middleware

The CEL Mobile Middleware is two NodeJS applications which are run out of AWS (Amazon Web Services) ElasticBeanstalk. Gavin worked on the initial development of the NodeJS Applications, ensuring that the appropriate standards were put in-place for Security and Performance. Gavin then trained two of his colleagues to ensure business redundancy and continued to make highly valuable contributions to the project.

* Architect - Designed the AWS architecture to allow Colab to support their clients on secure, isolated infrastructure utilizing VPC Private Subnets to keep servers off the Internet and AWS ElasticBeanstalk as a PaaS (management of server, OS, and platform (NodeJS and nginx)).
* Worked with all CEL Mobile client's IT Architecture teams to describe how CEL Mobile integrates with Oracle EBS and therefore what actions need to be taken to make the project a success.

### Android Mobile Application

Gavin built the thing!

*******DETAIL*******
