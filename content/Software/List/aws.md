---
id: p9bi07d1ylgvin6eudvftw0
title: Aws
desc: ''
updated: 1647995086295
created: 1645726687073
---

``` bash
sudo apt-get install awscli
sudo python3 -m pip install awscli==1.18.105
sudo python3 -m pip install botocore==1.17.28
pip3 uninstall botocore 
```

``` bash 
# Navigate to the home directory
cd ~
# If you do not use the profile-name, a default profile will be created for you.
aws configure --profile <profile-name>
# View the current configuration
aws configure list --profile <profile-name>
# View all existing profile names
aws configure list-profiles
# In case, you want to change the region in a given profile
# aws configure set <parameter> <value>  --profile <profile-name>
aws configure set region us-east-1  --profile <profile-name>
```

``` bash
# ~/.bashrc
export AWS_CONFIG_FILE=~/.aws/config
export AWS_SHARED_CREDENTIALS_FILE=~/.aws/credentials
```

## Regions

* [AWS service endpoints - AWS General Reference](https://docs.aws.amazon.com/general/latest/gr/rande.html)
us-east-1

## S3

[python - What is the fastest way to empty s3 bucket using boto3? - Stack Overflow](https://stackoverflow.com/questions/43326493/what-is-the-fastest-way-to-empty-s3-bucket-using-boto3/43328646)

## Source

* [python - ImportError: cannot import name 'docevents' from 'botocore.docs.bcdoc' in AWS CodeBuild - Stack Overflow](https://stackoverflow.com/questions/64596394/importerror-cannot-import-name-docevents-from-botocore-docs-bcdoc-in-aws-co)

## Services

* Outpost
  * Connect to on Prem
* RDS
  * Amazon Relational Database Service
* IAM
  * A document that grants or denies permissions to AWS services and resources
* AWS Cost Explorer
  * Graphs of money being spent
* GuardDuty
  * "Intelligent" Antivirus
* OpsWorks 
  * Chef and Puppet, automate setting up servers
  * Works on AWS and on Prem
* AWS Organizations
  * For admins to manage stuff
* Different Elastic Load Balancer
  * Classic(OLD do not use), Application(HTTP Routes), Network(UDP, TCP, Location)
* Lightsail
  * Platform as a service
* AWS Personal Health Dashboard
  * Is everyone healthy?
* CloudFormation templates
  * Written in JSON
* S3
  * Bucket Policies
  * Send the data to Glacier and do nothing more – all data in Glacier is encrypted by default 
    * Vault, Archive, Access Policy
  *  https, then the bucket name, then dot, then the AWS S3 regional endpoint, then slash, then the object name 
  * Backing up your data
* AWS Shield Standard
  * For DDOS
* AWS Assurance Program
* AWS Risk and Compliance Program
* AWS Well-Architected Framework
  * Operational
  * Security
    * Infastrucure
    * Detective
    * Technical Account Management
  * Reliability
  * Performance
  * Cost
  * Sustain
* Trusted Advisor
  * Performance
  * Fault TOlerance
  * Security
  * Cost Optimization
* AWS KMS (Key Management Service)
* Cloudwatch
* Cognito
  * Signing on with different accounts
* AWS WAF
  * Firewall
  * NOT REGION SPECIFIC
* IAM
  * Configurable Components
    * Users
    * Permissions
    * Groups
    * Roles
* ElastiCache
  * SQL REdis In Memory
* DynamoDB
  * No SQL Database
  * Scales nicely
* AuoraDB
  * Fast MySQL/Postgres
* CloudEndure
  * For Disaster Recovery
* AWS EFS - Elastic File System
  * Regional
* AWS Batch
  * Self Explanatory, for Data Engineering
* Route 53
  * DNS
  * Pay as You Go
  * NOT REGION SPECIFIC
* Amazon Cognito
* SQS Message Queue Service
* SES Simple Email Service
* SWF - Simple Workflow Service
* AWS Pinpoint - All Messaging Needs
* AWS Storage Gateway - For Hybrid clouds and works exactly how you would expect
* AWS Config - Audit and evaluate configurations
* AWS SNS
  * Simple Notification Service
* ELB - Elastic Load Balancing
* Artifact
  * For security and compliance reports
  * Does not monitor for compliance
* Kinesis
  * Streaming Data
* AMI Amazon Machine Image
* Cognito - Multi Identity Service, HIPPA and stuf as well
* AWS Inspector, automate checking for vulnerabilities.
* Containers
  * AWS Fargate, Serverless Container Applications
  * ECR - Elastic Container Registry
  * ECS - Elastic Container Service, still need EC2 Instances
* Customer Service
  * AWS Connect - Customer Service
  * AWS Lex
    * Chatbots
* AWS X-Ray, trace serverless applications
* AWS Neptune - Graph Database
* AWS Cost Explorer has graphs, what is cost and usage reports used for?
  * Cost and Usage reports just lists stuff
  * Displays three months
* Machine Learning Stuff
  * Macie - ML checkup on on Buckets
  * Amazon Rekognition, Image ML
* CI/CD
  * Beanstalk - Manage deployed applications
  * CodeDeploy, CI
  * CodePipeline - Automate release pipeline, no development or continuos delivery
  * CodeDeploy - Used to deploy code, works on Prem
  * CodeCommit - AWS Git
  * CodeStar - CI/CD
  * OpsWorks -  Chef and Puppet, Works on Prem
* Costs Stuff
  * Cost and Usage Report
    * No Graphs
    * Super Granular
  * Cost Explorer
    * Not Granual
## Security

* NAT Gateway into private subnet
* HIPAA, Health Records
* PCI DSS Level 1, Credit Cards
* Compliance Program, Risk Information, Identity
* Different Service, Different Security
* Access Key's can not be used to log into AWS Management Console
* Authentication, who is accessing the system
* AWS Manages Security
* Hacked, AWS Abuse Team
* Do not have root user access keys anywhere
* Shared Responsibility Model
  * Everything Except Customer Data
* AWS is responsible for Security in the Cloud
* AWS Assurance Program
  * Compliance
  * Certifications
* AWS Risk and Complience
  * Security
  * Identity and Access Managment
* Security Pillar Well-Archtected
  * IAM
  * Infastructure Protection
  * Detective Controls
  
## Account Types

* The 4 AWS Account Tiers are Basic, Developer, Business, and Enterprise
* Account Types
  * Basic, Business, Developer
* Support API
  * Support Email during business hours, Developer
  * Business Account
* Business outcome
  * AWS Professional Services

## Migration Services

* Database Migration Service
* Server Migration Service


## Billing

* Resource Group
* Contact AWS Concierge with billing issues
* When less than a year use Spot Instance
* TCO Calculator / AWS SImple Monthly Calculator
* Free Services
 * Auto Scaling
 * Cloud Formation
 * IAM
 * VPC
* Reserved Instances are payed up front
* A resource group is a collection of resources that share one or more tags (or portions of tags.) 
* EC2 is billed hourly
* Cost Explorer
* AWS Cost and Usage Reports, for billing stuff rather than logs
  * Uploads to Redshift and AWS QuickSight
* Billing for Reserved Instances
  * PURI Partial
  * AURI All Up front
  * NURI No Upfront
* CAPEX (Capital Expedatures) vs. OPEX (Operating Expenses)
* AWS SageMaker 
## Test 001

* CloudWatch
  * A repository for metrics and logs
* Developer Support Plan
  * Limited Trusted Advisor
  * No access to AWS Support API
* AWS Budgets, for alerts
* Cost allocation tags, for tracking costs
* For calculating a migration
  * Sales Rep
  * Pricing Calculator
* AWS Shared Responsibility Model????
* Regional Services
  * EFS
  * Batch

## Test003

* When no Object is messaged use EFS
* AWS Step Functions, multiple Serverless
* 12 Hours required for Glacier Deep Archive
* Amazon Connect and Amazon Chime are Customer communication services
* Kubernetes does not benefit from reserved instances
* Routeing traffic to healthy instance, ELB, R53 NOT auto scaling
* SQS
  * Durable Storage for Events and Messages
  * Decouple parts of system for fault taulerence
* IAM Alias

## Test 004

* Spread your infrastructure across Availability Zones
* If user stores data locally put the data in S3 infrequent access
* AWS will not recommend a third party auditor
* IAM users verses Roles
  * IAM roles are not for the administrator to manage your AWS account for you
* Firewalls are partially managed by the customer
* AWS get's cheaper each year
* Golden AMI for moving applications on EC2 Around
* Developer plan has unlimited technical support cases
* READ ALL ANSWERS
* EC2 is Per Second Billing
* Compare key words in question with answers
* Servers are separated because they can have a disaster
* Service Limits are a okay thing
* Enterprise Plan get's one hour response time in case system goes down
* Oracle has Bring Your Own Licence

## Test 005

* Zonal means that works in a specific zone, S3 does not count
* Everyone has the Personal Health Dashboard
* Service Control Policy - control services across accounts
* Systems Manager, automates common maitnance tasks
* AWS Transit Gateway, connects a list of VPS and on Prem
* Savings plans, promise $/Hour get rebates

## Test 001

* S3 is not for rapidly changing data
* First 12, 35, 39, 46, 50, 55, 59

## Test 002

* 1,8, 9 (Read Carefully), 11, 14, 20, 21, 28, 30, 35, 38, 41, 42, 45, 54, 56, 63
* Only databases can be pen tested on
* Elastic IPs are only charged if they are not attached to running instances.
* S3 has User and Bucket Policies
* Snowball is a compute box not storage stuff

## Test 003

* Connection
  * Site to Site VPN
  * Direct Connect
  * Connect, just a hosted VPN
* Database
  * 
* Scale
  * Beanstalk, .net python apps
  * EKS
  * ELB
* Logging
  * Cloud Watch, sends notifications
  * Cloud Trail, log everything
  * System Manager, Operational Data
  * Archive, reports for government
  * Trusted advisor, check if following best practices
* Storage
  * S3, only when they say object storage
  * EFS
  * Storage Gateways, convert NFT and stuff to S3
* Security
  * Detective
  * GUardDuty
  * AWS Shield
* Billing
  * Cost Explorer, gives recommendations
  * Cost and Usage REports
  * Budgets, Alerts and set quotas
  * Consolidated Billing, take advantage of bulk stuff
* Serverless
  * Lambda
  * Step Functions
  * Don't worry about high availability, think about cognative load
* Support
  * Chime, video conferencing
  * Connect, text support
* Deployment
  * CodePipeline - Automated to shit
  * CodeCommit - Basically git
  * CodeDeploy - 
  * CodeStar - Develop, Deploy Build
* Customer Tiers
  * Enterprise, 15 min for business critical, 1 hour for production system
* Questions
  * What is the best way to keep track of all activities made in your AWS account?
    * Cloud Watch
* When on Premis use EFS because it supports NFT and stuff
* Provisioned (sustained) IOPS verses Throughput (Burst)
* Help on
  * Which of the following services allow you to mask downtime of your application by rerouting your traffic to healthy instances? (Select TWO.)
    * ELB, Route53
  * You noticed that you cannot reach one of your EC2 web servers behind an ELB whenever you enter the DNS name of your load balancer. Which of the following should you first check to gain more insight on the issue?
    * ELB Health Check
  * Which of the following security group rules are valid? (Select TWO.)
    * Inbound RDP with an address range, did not say IP
    * GroupID does not exist
    * Instance ID is okay though

## Test 005

* AWS Organizations
* AWS Secrets Manager
* AWS Step Functions
* Redshift Spectrum?
* Remember
  * OrOrganizations help with accounts not active directory
  * SSL Certificates, IAM and Certificate Manager
* Business Support Plan, Archatecture Support
  * Concierge Support Team

## Test 004

* *Variable Expenses*
* AWS Config, monitors compliance
* Cloudfront is a CDN
* ENterprise, 15 min, hour, 4 hour, day

## Test 001

* Sole Responsibility of Customer is, Service and Communications Protection or Zone Security
* Elasticache work with SQL
* CloudWatch Logs, monitor applications, and retention policy
* Regional Services are AWS EFS and AWS Batch, ECT is for Availability Zone
* "Business Outcomes", Professional Services

## AWS Boy 001

* Petabytes of Storage, Block Storage
* Social media S3 Storage, Lifeycle Policies
* Every resource tag does not need a string
* Scale with Read Replicas not zone replications
* Cost Optimizations requires experience
* SSL can use HSM
* If user only needs data for a certain period of time, archive that shit
* S3 has frequent and infrequent access
* Quicksight is useful for budget visualizations


## AWS Boy 002

* Serverless, DynamoDB, S3
* Inspector uses security templates
* When asking about consistency, use strong
* AWS Inspector looks at EC2 Instances
* ElasticCache, DYNAMIC CONTENT
* AWS Glacier, AWS CONSOLE NOT API
* Healtcheck, add 4 seconds before Error
* EBS is replicated across AZ
* AWS Shield comes with WAF for free, DUH

## AWS Boy 003

* You can use AWS Aurora for Postgres
* Data Stream, SQL, use Kinesis Analytics
* RDS Failover, use Multi-AZ
* There are two AWS Shields
* When Initial Config is mentioned use AWS Config 
* Money Stuff
  * AWS Billing & Cost Management & Amazon Cloudwatch, Notifications
  * Cost Explorer, Forcasts and Graphs
  * AWS Budgets will give the user the status of user-set budgets and provide forecasts of estimated costs. The tool will not give a graphical representation of the data.
* Discover, Classify, Protect
* DataSync, Agentless, Direct Connect


oEs8XUAoUHMAK69AGpQv8HQhtLyvXl8